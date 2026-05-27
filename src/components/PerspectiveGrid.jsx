"use client";

import React, { useEffect, useRef } from 'react';

export default function PerspectiveGrid() {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e) => {
      mouseRef.current.targetX = e.clientX;
      mouseRef.current.targetY = e.clientY;
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);

    // Grid configuration tokens
    const gridSize = 60;
    const dotRadius = 1;
    const maxInfluence = 300;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Subtle radial gradient background that follows cursor loosely
      const bgGrad = ctx.createRadialGradient(
        width / 2 + (mouseRef.current.x - width / 2) * 0.15,
        height / 2 + (mouseRef.current.y - height / 2) * 0.15,
        10,
        width / 2,
        height / 2,
        Math.max(width, height)
      );
      bgGrad.addColorStop(0, '#FFFDF6');
      bgGrad.addColorStop(0.5, '#FFFDF6');
      bgGrad.addColorStop(1, '#FAF6ED');
      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, width, height);

      // Smooth interpolation (lerp) for micro-mushy interaction feel
      const mouse = mouseRef.current;
      mouse.x += (mouse.targetX - mouse.x) * 0.08;
      mouse.y += (mouse.targetY - mouse.y) * 0.08;

      // Base dot styles — Deep Ink Navy at a clearly visible but elegant opacity
      ctx.fillStyle = 'rgba(9, 18, 44, 0.32)';
      ctx.strokeStyle = 'rgba(9, 18, 44, 0.12)';
      ctx.lineWidth = 0.5;

      // Pre-calculate column and row counts
      const cols = Math.ceil(width / gridSize) + 1;
      const rows = Math.ceil(height / gridSize) + 1;

      // Store projected positions for line drawing
      const positions = [];

      for (let r = 0; r < rows; r++) {
        const row = [];
        for (let c = 0; c < cols; c++) {
          const baseX = c * gridSize;
          const baseY = r * gridSize;

          // Calculate distance vector from cursor to current grid node
          const dx = mouse.x - baseX;
          const dy = mouse.y - baseY;
          const distance = Math.sqrt(dx * dx + dy * dy);

          // Push particles slightly away from cursor if within influence radius
          let offsetX = 0;
          let offsetY = 0;

          if (distance < maxInfluence && distance > 0) {
            const force = (maxInfluence - distance) / maxInfluence;
            // Inverse-square-inspired spatial distortion
            const eased = force * force;
            offsetX = -(dx / distance) * eased * 22;
            offsetY = -(dy / distance) * eased * 22;
          }

          const finalX = baseX + offsetX;
          const finalY = baseY + offsetY;

          row.push({ x: finalX, y: finalY });

          // Draw Luxury System Grid Node dots
          ctx.beginPath();
          ctx.arc(finalX, finalY, dotRadius, 0, Math.PI * 2);
          ctx.fillStyle = 'rgba(9, 18, 44, 0.32)';
          ctx.fill();

          // Draw technical crosshairs at every 3rd intersection
          if (c % 3 === 0 && r % 3 === 0) {
            ctx.strokeStyle = 'rgba(9, 18, 44, 0.24)';
            ctx.beginPath();
            ctx.moveTo(finalX - 6, finalY);
            ctx.lineTo(finalX + 6, finalY);
            ctx.moveTo(finalX, finalY - 6);
            ctx.lineTo(finalX, finalY + 6);
            ctx.stroke();
          }
        }
        positions.push(row);
      }

      // Draw connecting matrix paths — horizontal and vertical grid lines
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const current = positions[r][c];

          // Horizontal connection to right neighbor
          if (c < cols - 1) {
            const right = positions[r][c + 1];
            // Center columns get faint coral accent
            const isCenterCol = Math.abs(c - Math.floor(cols / 2)) < 3;
            ctx.strokeStyle = isCenterCol
              ? 'rgba(234, 110, 56, 0.22)'
              : 'rgba(9, 18, 44, 0.12)';
            ctx.beginPath();
            ctx.moveTo(current.x, current.y);
            ctx.lineTo(right.x, right.y);
            ctx.stroke();
          }

          // Vertical connection to bottom neighbor
          if (r < rows - 1) {
            const bottom = positions[r + 1][c];
            const isCenterCol = Math.abs(c - Math.floor(cols / 2)) < 3;
            ctx.strokeStyle = isCenterCol
              ? 'rgba(234, 110, 56, 0.22)'
              : 'rgba(9, 18, 44, 0.12)';
            ctx.beginPath();
            ctx.moveTo(current.x, current.y);
            ctx.lineTo(bottom.x, bottom.y);
            ctx.stroke();
          }
        }
      }

      // Draw active interactive glow under cursor
      const glowGrad = ctx.createRadialGradient(
        mouse.x, mouse.y, 0,
        mouse.x, mouse.y, 220
      );
      glowGrad.addColorStop(0, 'rgba(234, 110, 56, 0.08)');
      glowGrad.addColorStop(0.5, 'rgba(234, 110, 56, 0.025)');
      glowGrad.addColorStop(1, 'rgba(255, 253, 246, 0)');
      ctx.fillStyle = glowGrad;
      ctx.beginPath();
      ctx.arc(mouse.x, mouse.y, 220, 0, Math.PI * 2);
      ctx.fill();

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-0 bg-[#FFFDF6]"
    />
  );
}
