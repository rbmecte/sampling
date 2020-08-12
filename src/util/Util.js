function randomNumber(sum) {
    return Math.floor(Math.random() * sum) + 1
}

export function generateNumber(sum, count) {
    if (count > sum) {
        return [];
    }

    const samples = [];
    for (let i = 0; i < count; i++) {
        let num = randomNumber(sum);
        while (samples.includes(num)) {
            num = randomNumber(sum);
        }
        samples.push(num);
    }
    return samples;
}