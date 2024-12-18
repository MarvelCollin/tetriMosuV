// ...existing code...

const startAutoRotation = () => {
    if (rotationIntervalRef.current) {
        clearInterval(rotationIntervalRef.current);
    }

    const rotateAndReturn = async () => {
        if (!isRotatingRef.current && cameraPivotRef.current) {
            if (gameInstanceRef.current) {
                isRotatingRef.current = true;
                
                // Wait for countdown to complete before rotating
                await gameInstanceRef.current.onRotationStart();
                console.log('Countdown complete, starting rotation');

                const targetAngle = cameraAngleRef.current + Math.PI;
                const startTime = Date.now();
                const duration = 1000;

                function animate() {
                    const elapsed = Date.now() - startTime;
                    const progress = Math.min(elapsed / duration, 1);
                    
                    const easeProgress = 1 - Math.pow(1 - progress, 3);
                    const currentAngle = cameraAngleRef.current + (Math.PI * easeProgress);
                    
                    cameraPivotRef.current!.rotation.y = currentAngle;
                    
                    if (progress < 1) {
                        requestAnimationFrame(animate);
                    } else {
                        cameraAngleRef.current = targetAngle;
                        
                        setTimeout(() => {
                            const startTimeReturn = Date.now();
                            
                            function animateReturn() {
                                const elapsedReturn = Date.now() - startTimeReturn;
                                const progressReturn = Math.min(elapsedReturn / duration, 1);
                                
                                const easeProgressReturn = 1 - Math.pow(1 - progressReturn, 3);
                                const currentAngleReturn = targetAngle - (Math.PI * easeProgressReturn);
                                
                                cameraPivotRef.current!.rotation.y = currentAngleReturn;
                                
                                if (progressReturn < 1) {
                                    requestAnimationFrame(animateReturn);
                                } else {
                                    cameraAngleRef.current = targetAngle - Math.PI;
                                    isRotatingRef.current = false;
                                    if (gameInstanceRef.current) {
                                        gameInstanceRef.current.onRotationEnd();
                                    }
                                }
                            }
                            
                            animateReturn();
                        }, 5000); 
                    }
                }

                animate();
            }
        }
    };

    const randomInterval = () => {
        const interval = 30000 + Math.random() * 10000;
        rotationIntervalRef.current = setTimeout(() => {
            rotateAndReturn();
            randomInterval();
        }, interval);
    };

    randomInterval();
};

// ...existing code...
