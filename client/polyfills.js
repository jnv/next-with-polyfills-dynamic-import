/* eslint no-extend-native: 0 */

// Add your polyfills
// This files runs at the very beginning (even before React and Next.js core)

async function loadPolyfills() {
	// if (typeof window.IntersectionObserver === 'undefined') {
		await import('intersection-observer')
	// }
}

console.log('Load your polyfills')
loadPolyfills()