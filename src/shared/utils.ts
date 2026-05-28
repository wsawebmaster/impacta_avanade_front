
export function extractConstructorName(obj: any) {
    if (obj.__proto__.constructor.name) return obj?.__proto__.constructor.name;
    if (obj.__proto__) return extractConstructorName(obj.__proto__);
    return null;
}