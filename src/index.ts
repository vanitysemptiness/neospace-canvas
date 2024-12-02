import { CanvasManager } from './base/CanvasManager';
import './styles/canvas.css';
import './styles/toolbar.css';
import './styles/markdown.css';
import './styles/csv.css';
import { GridManager } from './base/GridManager';

document.addEventListener('DOMContentLoaded', () => {
    const app = document.getElementById('app');
    if (!app) return;
    
    // Keep the original working structure
    app.innerHTML = '<div class="canvas-container"></div><div id="toolbar-container"></div>';
    
    // Initialize grid and toolbar managers first, as they were working before
    const gridManager = new GridManager('canvas-container');
    void gridManager;
    
    // Then initialize our canvas manager for node handling
    const canvasManager = new CanvasManager('app');
    void canvasManager;
});