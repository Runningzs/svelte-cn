'use strict';

let source;

function check() {
	if (typeof module === 'undefined') return;

	if (module.hot.status() === 'idle') {
		module.hot.check(true).then(modules => {
			console.log(`[SAPPER] applied HMR update`);
		});
	}
}

function connect(port) {
	if (source || !window.EventSource) return;

	source = new EventSource(`http://${window.location.hostname}:${port}/__sapper__`);

	window.source = source;

	source.onopen = function(event) {
		console.log(`[SAPPER] dev client connected`);
	};

	source.onerror = function(error) {
		console.error(error);
	};

	source.onmessage = function(event) {
		const data = JSON.parse(event.data);
		if (!data) return; // just a heartbeat

		if (data.action === 'reload') {
			window.location.reload();
		}

		if (data.status === 'completed') {
			check();
		}
	};
}

exports.connect = connect;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2FwcGVyLWRldi1jbGllbnQtYzkzYjU5ZmMuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXBwZXIvc2FwcGVyLWRldi1jbGllbnQuanMiXSwic291cmNlc0NvbnRlbnQiOlsibGV0IHNvdXJjZTtcclxuXHJcbmZ1bmN0aW9uIGNoZWNrKCkge1xyXG5cdGlmICh0eXBlb2YgbW9kdWxlID09PSAndW5kZWZpbmVkJykgcmV0dXJuO1xyXG5cclxuXHRpZiAobW9kdWxlLmhvdC5zdGF0dXMoKSA9PT0gJ2lkbGUnKSB7XHJcblx0XHRtb2R1bGUuaG90LmNoZWNrKHRydWUpLnRoZW4obW9kdWxlcyA9PiB7XHJcblx0XHRcdGNvbnNvbGUubG9nKGBbU0FQUEVSXSBhcHBsaWVkIEhNUiB1cGRhdGVgKTtcclxuXHRcdH0pO1xyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNvbm5lY3QocG9ydCkge1xyXG5cdGlmIChzb3VyY2UgfHwgIXdpbmRvdy5FdmVudFNvdXJjZSkgcmV0dXJuO1xyXG5cclxuXHRzb3VyY2UgPSBuZXcgRXZlbnRTb3VyY2UoYGh0dHA6Ly8ke3dpbmRvdy5sb2NhdGlvbi5ob3N0bmFtZX06JHtwb3J0fS9fX3NhcHBlcl9fYCk7XHJcblxyXG5cdHdpbmRvdy5zb3VyY2UgPSBzb3VyY2U7XHJcblxyXG5cdHNvdXJjZS5vbm9wZW4gPSBmdW5jdGlvbihldmVudCkge1xyXG5cdFx0Y29uc29sZS5sb2coYFtTQVBQRVJdIGRldiBjbGllbnQgY29ubmVjdGVkYCk7XHJcblx0fTtcclxuXHJcblx0c291cmNlLm9uZXJyb3IgPSBmdW5jdGlvbihlcnJvcikge1xyXG5cdFx0Y29uc29sZS5lcnJvcihlcnJvcik7XHJcblx0fTtcclxuXHJcblx0c291cmNlLm9ubWVzc2FnZSA9IGZ1bmN0aW9uKGV2ZW50KSB7XHJcblx0XHRjb25zdCBkYXRhID0gSlNPTi5wYXJzZShldmVudC5kYXRhKTtcclxuXHRcdGlmICghZGF0YSkgcmV0dXJuOyAvLyBqdXN0IGEgaGVhcnRiZWF0XHJcblxyXG5cdFx0aWYgKGRhdGEuYWN0aW9uID09PSAncmVsb2FkJykge1xyXG5cdFx0XHR3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKGRhdGEuc3RhdHVzID09PSAnY29tcGxldGVkJykge1xyXG5cdFx0XHRjaGVjaygpO1xyXG5cdFx0fVxyXG5cdH07XHJcbn0iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFJLE1BQU0sQ0FBQzs7QUFFWCxTQUFTLEtBQUssR0FBRztDQUNoQixJQUFJLE9BQU8sTUFBTSxLQUFLLFdBQVcsRUFBRSxPQUFPOztDQUUxQyxJQUFJLE1BQU0sQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLEtBQUssTUFBTSxFQUFFO0VBQ25DLE1BQU0sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLElBQUk7R0FDdEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLDJCQUEyQixDQUFDLENBQUMsQ0FBQztHQUMzQyxDQUFDLENBQUM7RUFDSDtDQUNEOztBQUVELEFBQU8sU0FBUyxPQUFPLENBQUMsSUFBSSxFQUFFO0NBQzdCLElBQUksTUFBTSxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsRUFBRSxPQUFPOztDQUUxQyxNQUFNLEdBQUcsSUFBSSxXQUFXLENBQUMsQ0FBQyxPQUFPLEVBQUUsTUFBTSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDOztDQUVsRixNQUFNLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQzs7Q0FFdkIsTUFBTSxDQUFDLE1BQU0sR0FBRyxTQUFTLEtBQUssRUFBRTtFQUMvQixPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsNkJBQTZCLENBQUMsQ0FBQyxDQUFDO0VBQzdDLENBQUM7O0NBRUYsTUFBTSxDQUFDLE9BQU8sR0FBRyxTQUFTLEtBQUssRUFBRTtFQUNoQyxPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO0VBQ3JCLENBQUM7O0NBRUYsTUFBTSxDQUFDLFNBQVMsR0FBRyxTQUFTLEtBQUssRUFBRTtFQUNsQyxNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztFQUNwQyxJQUFJLENBQUMsSUFBSSxFQUFFLE9BQU87O0VBRWxCLElBQUksSUFBSSxDQUFDLE1BQU0sS0FBSyxRQUFRLEVBQUU7R0FDN0IsTUFBTSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQztHQUN6Qjs7RUFFRCxJQUFJLElBQUksQ0FBQyxNQUFNLEtBQUssV0FBVyxFQUFFO0dBQ2hDLEtBQUssRUFBRSxDQUFDO0dBQ1I7RUFDRCxDQUFDOzs7OzsifQ==
