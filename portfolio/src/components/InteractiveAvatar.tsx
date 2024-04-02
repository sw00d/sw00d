import { useEffect, useMemo, useRef, useState } from 'react';

const InteractiveAvatar = ({ setHideAvatar }) => {
    const canvasRef = useRef(null);
    const cellSize = 100;
    const imageSrc = '/sam.png'; // Path to your local image file in the public directory
    const canvasSize = 200; // Set the canvas size to 300x300 pixels
    const [recalculateCanvasSize, setRecalculateCanvasSize] = useState(false);

    useEffect(() => {
        loadImageAndGrid();
    }, []);

    const imageIsFullyErased = useMemo(() => {
        if (!canvasRef.current) return false;
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        const imageData = ctx.getImageData(0, 0, canvasSize, canvasSize);
        const data = imageData.data;
        for (let i = 0; i < data.length; i += 4) {
            if (data[i + 3] !== 0) {
                return false;
            }
        }
        return true;
    }, [imageSrc, recalculateCanvasSize])

    if (imageIsFullyErased) {
        setHideAvatar(true);
    }

    const loadImageAndGrid = () => {
        const canvas = canvasRef.current;
        const img = new Image();
        img.src = imageSrc;
        img.onload = () => {
            const canvas = canvasRef.current;
            canvas.width = canvasSize;
            canvas.height = canvasSize;
            drawImage(img);
        };
    };

    const drawImage = (img) => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        // Calculate the scale to fit the image within 300x300 pixels while maintaining aspect ratio
        const scale = Math.min(canvasSize / img.width, canvasSize / img.height);
        const scaledWidth = img.width * scale;
        const scaledHeight = img.height * scale;
        // Center the image on the canvas
        const xOffset = (canvasSize - scaledWidth) / 2;
        const yOffset = (canvasSize - scaledHeight) / 2;
        ctx.drawImage(img, xOffset, yOffset, scaledWidth, scaledHeight);
    };

    const handleClick = (e) => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        const rect = canvas.getBoundingClientRect();
        const x = Math.floor((e.clientX - rect.left) / cellSize) * cellSize;
        const y = Math.floor((e.clientY - rect.top) / cellSize) * cellSize;

        // Clear the cell on the canvas to make it transparent
        ctx.clearRect(x, y, cellSize, cellSize);
        setRecalculateCanvasSize(!recalculateCanvasSize);
    };

    return (
        <div
            style={{
                cursor: "url('/sam.png'), auto",
                color: 'white'
            }}
        >
            <canvas
                ref={canvasRef}
                onClick={handleClick}
            />
        </div>
    );
};

export default InteractiveAvatar;
