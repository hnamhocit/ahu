export function inView(node: HTMLElement, options?: IntersectionObserverInit) {
	let observer: IntersectionObserver;

	const setupObserver = () => {
		// Tạo một Intersection Observer mới
		observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				// Khi phần tử đi vào hoặc rời khỏi view
				if (entry.isIntersecting) {
					node.dispatchEvent(new CustomEvent('enterView'));
				} else {
					node.dispatchEvent(new CustomEvent('leaveView'));
				}
			});
		}, options); // Sử dụng các tùy chọn tùy chỉnh

		// Bắt đầu quan sát node
		observer.observe(node);
	};

	setupObserver();

	// Hàm `destroy` sẽ được gọi khi component bị hủy hoặc action bị gỡ bỏ
	return {
		destroy() {
			if (observer) {
				observer.disconnect(); // Ngừng quan sát để tránh rò rỉ bộ nhớ
			}
		},
		update(newOptions: IntersectionObserverInit) {
			// Nếu options thay đổi, disconnect observer cũ và setup lại
			if (observer) {
				observer.disconnect();
			}
			options = newOptions;
			setupObserver();
		}
	};
}
