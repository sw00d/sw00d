import { useEffect, useRef, useState } from 'react';

const CanvasPage = () => {
    const [selectedColors, setSelectedColors] = useState([]);
    const canvasRef = useRef(null);

    useEffect(() => {
        loadImageAndGrid();
    }, []);

    const drawGrid = (context, imgWidth, imgHeight) => {
        const gridSize = 9;
        context.strokeStyle = '#000';
        for (let x = 0; x <= imgWidth; x += gridSize) {
            context.moveTo(x, 0);
            context.lineTo(x, imgHeight);
        }
        for (let y = 0; y <= imgHeight; y += gridSize) {
            context.moveTo(0, y);
            context.lineTo(imgWidth, y);
        }
        context.stroke();
    };

    const loadImageAndGrid = () => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        const img = new Image();
        img.src = '/sam.png'; // Path to your local image file in the public directory
        img.onload = () => {
            canvas.width = img.width;
            canvas.height = img.height;
            ctx.drawImage(img, 0, 4);
            drawGrid(ctx, img.width, img.height);
        };
    };

    const handleClick = (e) => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        const rect = canvas.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const row = Math.floor(y / gridSize);
        const col = Math.floor(x / gridSize);

        const pixel = ctx.getImageData(x, y, 1, 1).data;
        const hexColor = rgbToHex(pixel[0], pixel[1], pixel[2]);

        const updatedColors = [...gridColors];
        if (!updatedColors[row]) updatedColors[row] = [];
        updatedColors[row][col] = hexColor;
        setGridColors(updatedColors);
    };

    const rgbToHex = (r, g, b) => `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;

    return (
        <div>
            <canvas ref={canvasRef} onClick={handleClick} />
            <div>
                Selected Colors:
                <pre>{JSON.stringify(selectedColors, null, 2)}</pre>
            </div>
        </div>
    );
};

export default CanvasPage;
