function fixText(text) {
    var trimmed = text.trim()
    var solution = trimmed.charAt(0).toUpperCase() + trimmed.slice(1).toLowerCase()
    return solution
}