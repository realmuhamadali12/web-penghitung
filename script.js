function calculateTabung() {
    const radius = parseFloat(document.getElementById('radiusTabung').value);
    const height = parseFloat(document.getElementById('heightTabung').value);

    if (isNaN(radius) || isNaN(height) || radius <= 0 || height <= 0) {
        document.getElementById('resultTabung').innerText = 'Mohon masukkan nilai yang valid.';
        return;
    }

    const luasAlas = Math.PI * Math.pow(radius, 2);
    const volume = luasAlas * height;

    document.getElementById('resultTabung').innerText = `Luas Alas: ${luasAlas.toFixed(2)}\nVolume: ${volume.toFixed(2)}`;
}

function calculateBola() {
    const radius = parseFloat(document.getElementById('radiusBola').value);

    if (isNaN(radius) || radius <= 0) {
        document.getElementById('resultBola').innerText = 'Mohon masukkan nilai yang valid.';
        return;
    }

    const luasAlas = 4 * Math.PI * Math.pow(radius, 2);
    const volume = (4 / 3) * Math.PI * Math.pow(radius, 3);

    document.getElementById('resultBola').innerText = `Luas Permukaan: ${luasAlas.toFixed(2)}\nVolume: ${volume.toFixed(2)}`;
}

function calculateLimas() {
    const base = parseFloat(document.getElementById('baseLimas').value);
    const height = parseFloat(document.getElementById('heightLimas').value);

    if (isNaN(base) || isNaN(height) || base <= 0 || height <= 0) {
        document.getElementById('resultLimas').innerText = 'Mohon masukkan nilai yang valid.';
        return;
    }

    const luasAlas = Math.pow(base, 2);
    const volume = (1 / 3) * luasAlas * height;

    document.getElementById('resultLimas').innerText = `Luas Alas: ${luasAlas.toFixed(2)}\nVolume: ${volume.toFixed(2)}`;
}
