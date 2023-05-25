export function getEnvironmentVariable(key: string, fallback: string) {
    let value = process.env[key];

    if (!value || value.length === 0 || value.trim().length === 0) {
        value = fallback;
    }

    return value;
}
