// Initialize Icons
lucide.createIcons();

// Loader Logic
document.addEventListener("DOMContentLoaded", () => {
    const loader = document.getElementById('loader');
    const bar = document.getElementById('loader-bar');
    const percent = document.getElementById('loader-percent');
    const body = document.body;

    // Lock scroll
    body.style.overflow = 'hidden';

    let progress = 0;
    const duration = 1000; // 1 second
    const intervalTime = 10;
    const increment = 100 / (duration / intervalTime);

    const interval = setInterval(() => {
        progress += increment;
        if (progress >= 100) {
            progress = 100;
            clearInterval(interval);

            // Fade out
            setTimeout(() => {
                loader.style.transition = 'opacity 0.5s ease';
                loader.style.opacity = '0';
                body.style.overflow = ''; // Unlock scroll
                setTimeout(() => {
                    loader.style.display = 'none';
                }, 500);
            }, 100);
        }

        bar.style.width = `${progress}%`;
        percent.innerText = `${Math.round(progress)}%`;
    }, intervalTime);

    // Draggable Diagram Logic
    initDraggableDiagram();
});

// Navbar Logic
const bubbles = document.querySelectorAll('.glass-bubble');

const updateNavbar = () => {
    if (window.scrollY > 20) {
        bubbles.forEach(b => b.classList.add('scrolled'));
    } else {
        bubbles.forEach(b => b.classList.remove('scrolled'));
    }
};

window.addEventListener('scroll', updateNavbar);
updateNavbar(); // Initial check

function initDraggableDiagram() {
    const container = document.getElementById('pipeline-container');
    const svg = document.getElementById('pipeline-svg');
    const staticTracksGroup = document.getElementById('static-tracks');
    const animatedBeamsGroup = document.getElementById('animated-beams');
    const labelsGroup = document.getElementById('path-labels');
    const markersGroup = document.getElementById('connection-markers');

    const nodes = [
        'node-user', 'node-data', 'node-query', 'node-chunk',
        'node-analysis', 'node-vectordb', 'node-graphdb',
        'node-rerank', 'node-llm'
    ];

    const connections = [
        { from: 'node-user', to: 'node-data', type: 'data', delay: 0, label: 'RAW DATA' },
        { from: 'node-data', to: 'node-chunk', type: 'data', delay: 0.5 },
        { from: 'node-chunk', to: 'node-vectordb', type: 'data', delay: 0.5, label: 'VECTORS' },
        { from: 'node-chunk', to: 'node-graphdb', type: 'data', delay: 0.5, label: 'NODES' },

        { from: 'node-user', to: 'node-query', type: 'query', delay: 0.5, label: 'QUERY' },
        { from: 'node-query', to: 'node-analysis', type: 'query', delay: 1 },
        { from: 'node-analysis', to: 'node-vectordb', type: 'query', delay: 1.5, label: 'SEARCH' },
        { from: 'node-analysis', to: 'node-graphdb', type: 'query', delay: 1.5, label: 'TRAVERSE' },

        { from: 'node-vectordb', to: 'node-rerank', type: 'result', delay: 2, label: 'MATCHES' },
        { from: 'node-graphdb', to: 'node-rerank', type: 'result', delay: 2, label: 'CONTEXT' },
        { from: 'node-rerank', to: 'node-llm', type: 'result', delay: 2.5, label: 'TOP-K' },

        { from: 'node-llm', to: 'node-user', type: 'feedback', delay: 3, dashed: true }
    ];

    function getNodePort(el, type) {
        const rect = el.getBoundingClientRect();
        const pt = svg.createSVGPoint();

        // Calculate connection point in client coordinates
        if (type === 'input') {
            pt.x = rect.left;
            pt.y = rect.top + rect.height / 2;
        } else if (type === 'output') {
            pt.x = rect.right;
            pt.y = rect.top + rect.height / 2;
        } else if (type === 'bottom') {
            pt.x = rect.left + rect.width / 2;
            pt.y = rect.bottom;
        } else {
            pt.x = rect.left + rect.width / 2;
            pt.y = rect.top + rect.height / 2;
        }

        // Transform to SVG coordinates using the CTM inverse
        // This handles viewBox scaling and aspect ratio preservation correctly
        const svgP = pt.matrixTransform(svg.getScreenCTM().inverse());
        return { x: svgP.x, y: svgP.y };
    }

    function updatePaths() {
        staticTracksGroup.innerHTML = '';
        animatedBeamsGroup.innerHTML = '';
        labelsGroup.innerHTML = '';
        markersGroup.innerHTML = '';

        connections.forEach(conn => {
            const fromNode = document.getElementById(conn.from);
            const toNode = document.getElementById(conn.to);
            if (!fromNode || !toNode) return;

            let start, end;
            let d = '';

            if (conn.type === 'feedback') {
                start = getNodePort(fromNode, 'bottom');
                end = getNodePort(toNode, 'bottom');
                const midX = (start.x + end.x) / 2;
                const bottomY = 550; // Fixed bottom curve depth in SVG coords
                d = `M ${start.x} ${start.y} C ${start.x} ${start.y + 50}, ${midX} ${bottomY}, ${midX} ${bottomY} C ${midX} ${bottomY}, ${end.x} ${end.y + 50}, ${end.x} ${end.y}`;
            } else {
                start = getNodePort(fromNode, 'output');
                end = getNodePort(toNode, 'input');
                const midX = (start.x + end.x) / 2;
                d = `M ${start.x} ${start.y} C ${midX} ${start.y}, ${midX} ${end.y}, ${end.x} ${end.y}`;
            }

            const trackId = `track-${conn.from}-${conn.to}`;

            // Static Track
            const track = document.createElementNS("http://www.w3.org/2000/svg", "path");
            track.setAttribute("d", d);
            track.setAttribute("id", trackId);
            if (conn.dashed) {
                track.setAttribute("stroke-dasharray", "4 4");
                track.setAttribute("class", "opacity-30");
            }
            staticTracksGroup.appendChild(track);

            // Animated Beam
            if (!conn.dashed) {
                const beam = document.createElementNS("http://www.w3.org/2000/svg", "path");
                beam.setAttribute("d", d);
                beam.setAttribute("class", `stroke-[url(#beam-gradient-${conn.type})] stroke-2 fill-none beam-path`);
                beam.style.animationDelay = `${conn.delay}s`;
                animatedBeamsGroup.appendChild(beam);
            }

            // Connection Markers (Dots)
            const markerColor = conn.type === 'data' ? '#60a5fa' : // blue-400
                conn.type === 'query' ? '#818cf8' : // indigo-400
                    conn.type === 'result' ? '#4ade80' : // green-400
                        '#94a3b8'; // slate-400

            const markerRadius = 3.5;

            const startMarker = document.createElementNS("http://www.w3.org/2000/svg", "circle");
            startMarker.setAttribute("cx", start.x);
            startMarker.setAttribute("cy", start.y);
            startMarker.setAttribute("r", markerRadius);
            startMarker.setAttribute("fill", markerColor);
            markersGroup.appendChild(startMarker);

            const endMarker = document.createElementNS("http://www.w3.org/2000/svg", "circle");
            endMarker.setAttribute("cx", end.x);
            endMarker.setAttribute("cy", end.y);
            endMarker.setAttribute("r", markerRadius);
            endMarker.setAttribute("fill", markerColor);
            markersGroup.appendChild(endMarker);

            // Label
            if (conn.label) {
                const text = document.createElementNS("http://www.w3.org/2000/svg", "text");
                text.setAttribute("class", "fill-slate-500 text-[10px] font-mono tracking-wider");
                text.setAttribute("dy", "-5");

                const textPath = document.createElementNS("http://www.w3.org/2000/svg", "textPath");
                textPath.setAttribute("href", `#${trackId}`);
                textPath.setAttribute("startOffset", "50%");
                textPath.setAttribute("text-anchor", "middle");
                textPath.textContent = conn.label;

                text.appendChild(textPath);
                labelsGroup.appendChild(text);
            }
        });
    }

    let draggedElement = null;
    let offset = { x: 0, y: 0 };

    nodes.forEach(id => {
        const el = document.getElementById(id);
        if (el) {
            el.addEventListener('mousedown', startDrag);
            el.addEventListener('touchstart', startDrag, { passive: false });
        }
    });

    function startDrag(e) {
        e.preventDefault();
        draggedElement = e.currentTarget;
        const clientX = e.clientX || e.touches[0].clientX;
        const clientY = e.clientY || e.touches[0].clientY;
        const rect = draggedElement.getBoundingClientRect();
        offset.x = clientX - rect.left - rect.width / 2;
        offset.y = clientY - rect.top - rect.height / 2;

        document.addEventListener('mousemove', drag);
        document.addEventListener('mouseup', endDrag);
        document.addEventListener('touchmove', drag, { passive: false });
        document.addEventListener('touchend', endDrag);

        draggedElement.style.cursor = 'grabbing';
    }

    function drag(e) {
        if (!draggedElement) return;
        e.preventDefault();
        const clientX = e.clientX || (e.touches ? e.touches[0].clientX : 0);
        const clientY = e.clientY || (e.touches ? e.touches[0].clientY : 0);
        const containerRect = container.getBoundingClientRect();

        let newX = clientX - containerRect.left;
        let newY = clientY - containerRect.top;

        newX = Math.max(0, Math.min(newX, containerRect.width));
        newY = Math.max(0, Math.min(newY, containerRect.height));

        draggedElement.style.left = `${(newX / containerRect.width) * 100}%`;
        draggedElement.style.top = `${(newY / containerRect.height) * 100}%`;

        requestAnimationFrame(updatePaths);
    }

    function endDrag() {
        if (draggedElement) {
            draggedElement.style.cursor = 'grab';
            draggedElement = null;
        }
        document.removeEventListener('mousemove', drag);
        document.removeEventListener('mouseup', endDrag);
        document.removeEventListener('touchmove', drag);
        document.removeEventListener('touchend', endDrag);
    }

    setTimeout(updatePaths, 100);
    window.addEventListener('resize', updatePaths);
}
