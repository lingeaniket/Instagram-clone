const imgContainer = document.getElementById("imgContainer");
const img = new Image();
img.crossOrigin = "Anonymous";
img.onload = () => {
    imgContainer.appendChild(img);
    const imgData = blurhash.getImageData(img);

    blurhash
        .encodePromise(imgData, img.width, img.height, 4, 4)
        .then(hash => {
            return blurhash.decodePromise(
                hash,
                img.width,
                img.height
            );
        })
        .then(blurhashImgData => {
            // as canvas element
            const canvas = blurhash.drawImageDataOnNewCanvas(
                blurhashImgData,
                img.width,
                img.height
            );
            document.body.appendChild(canvas);

            // as image object with onload callback
            const imgObject = blurhash.getImageDataAsImage(
                blurhashImgData,
                img.width,
                img.height,
                (event, imgObject) => {
                    document.body.appendChild(imgObject);
                }
            );

            // as image object with promise
            return blurhash.getImageDataAsImageWithOnloadPromise(
                blurhashImgData,
                img.width,
                img.height
            );
        })
        .then(imgObject => {
            document.body.appendChild(imgObject);
        });
};
img.src = "https://placekitten.com/600/400";