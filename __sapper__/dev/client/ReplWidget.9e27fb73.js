import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, o as onMount, G as globals, w as mount_component, x as transition_in, y as transition_out, z as destroy_component, V as binding_callbacks, a4 as bind, e as element, l as space, c as claim_element, a as children, b as detach_dev, p as claim_space, f as attr_dev, Q as toggle_class, h as add_location, W as add_render_callback, j as insert_dev, k as append_dev, X as add_resize_listener, A as group_outros, B as check_outros, a5 as add_flush_callback } from './index.4e52d202.js';
import { R as Repl } from './Repl.f1ddc62a.js';
import { p as process_example } from './examples.cd1fcc82.js';
import { I as InputOutputToggle } from './InputOutputToggle.cf9a1ce1.js';

/* src\components\Repl\ReplWidget.svelte generated by Svelte v3.12.0 */
const { Object: Object_1 } = globals;

const file = "src\\components\\Repl\\ReplWidget.svelte";

// (116:2) {#if true}
function create_if_block_1(ctx) {
	var current;

	let repl_1_props = {
		workersUrl: "workers",
		fixed: ctx.mobile,
		svelteUrl: ctx.svelteUrl,
		rollupUrl: ctx.rollupUrl,
		embedded: true,
		relaxed: true
	};
	var repl_1 = new Repl({ props: repl_1_props, $$inline: true });

	ctx.repl_1_binding(repl_1);

	const block = {
		c: function create() {
			repl_1.$$.fragment.c();
		},

		l: function claim(nodes) {
			repl_1.$$.fragment.l(nodes);
		},

		m: function mount(target, anchor) {
			mount_component(repl_1, target, anchor);
			current = true;
		},

		p: function update(changed, ctx) {
			var repl_1_changes = {};
			if (changed.mobile) repl_1_changes.fixed = ctx.mobile;
			if (changed.svelteUrl) repl_1_changes.svelteUrl = ctx.svelteUrl;
			repl_1.$set(repl_1_changes);
		},

		i: function intro(local) {
			if (current) return;
			transition_in(repl_1.$$.fragment, local);

			current = true;
		},

		o: function outro(local) {
			transition_out(repl_1.$$.fragment, local);
			current = false;
		},

		d: function destroy(detaching) {
			ctx.repl_1_binding(null);

			destroy_component(repl_1, detaching);
		}
	};
	dispatch_dev("SvelteRegisterBlock", { block, id: create_if_block_1.name, type: "if", source: "(116:2) {#if true}", ctx });
	return block;
}

// (129:1) {#if mobile}
function create_if_block(ctx) {
	var updating_checked, current;

	function inputoutputtoggle_checked_binding(value) {
		ctx.inputoutputtoggle_checked_binding.call(null, value);
		updating_checked = true;
		add_flush_callback(() => updating_checked = false);
	}

	let inputoutputtoggle_props = {};
	if (ctx.checked !== void 0) {
		inputoutputtoggle_props.checked = ctx.checked;
	}
	var inputoutputtoggle = new InputOutputToggle({
		props: inputoutputtoggle_props,
		$$inline: true
	});

	binding_callbacks.push(() => bind(inputoutputtoggle, 'checked', inputoutputtoggle_checked_binding));

	const block = {
		c: function create() {
			inputoutputtoggle.$$.fragment.c();
		},

		l: function claim(nodes) {
			inputoutputtoggle.$$.fragment.l(nodes);
		},

		m: function mount(target, anchor) {
			mount_component(inputoutputtoggle, target, anchor);
			current = true;
		},

		p: function update(changed, ctx) {
			var inputoutputtoggle_changes = {};
			if (!updating_checked && changed.checked) {
				inputoutputtoggle_changes.checked = ctx.checked;
			}
			inputoutputtoggle.$set(inputoutputtoggle_changes);
		},

		i: function intro(local) {
			if (current) return;
			transition_in(inputoutputtoggle.$$.fragment, local);

			current = true;
		},

		o: function outro(local) {
			transition_out(inputoutputtoggle.$$.fragment, local);
			current = false;
		},

		d: function destroy(detaching) {
			destroy_component(inputoutputtoggle, detaching);
		}
	};
	dispatch_dev("SvelteRegisterBlock", { block, id: create_if_block.name, type: "if", source: "(129:1) {#if mobile}", ctx });
	return block;
}

function create_fragment(ctx) {
	var div1, div0, t, div1_resize_listener, current;

	var if_block0 =  create_if_block_1(ctx);

	var if_block1 = (ctx.mobile) && create_if_block(ctx);

	const block = {
		c: function create() {
			div1 = element("div");
			div0 = element("div");
			if (if_block0) if_block0.c();
			t = space();
			if (if_block1) if_block1.c();
			this.h();
		},

		l: function claim(nodes) {
			div1 = claim_element(nodes, "DIV", { class: true }, false);
			var div1_nodes = children(div1);

			div0 = claim_element(div1_nodes, "DIV", { class: true }, false);
			var div0_nodes = children(div0);

			if (if_block0) if_block0.l(div0_nodes);
			div0_nodes.forEach(detach_dev);
			t = claim_space(div1_nodes);
			if (if_block1) if_block1.l(div1_nodes);
			div1_nodes.forEach(detach_dev);
			this.h();
		},

		h: function hydrate() {
			attr_dev(div0, "class", "viewport svelte-614v39");
			toggle_class(div0, "offset", ctx.checked);
			add_location(div0, file, 114, 1, 2554);
			add_render_callback(() => ctx.div1_resize_handler.call(div1));
			attr_dev(div1, "class", "repl-outer svelte-614v39");
			toggle_class(div1, "mobile", ctx.mobile);
			add_location(div1, file, 113, 0, 2489);
		},

		m: function mount(target, anchor) {
			insert_dev(target, div1, anchor);
			append_dev(div1, div0);
			if (if_block0) if_block0.m(div0, null);
			append_dev(div1, t);
			if (if_block1) if_block1.m(div1, null);
			div1_resize_listener = add_resize_listener(div1, ctx.div1_resize_handler.bind(div1));
			current = true;
		},

		p: function update(changed, ctx) {
			if_block0.p(changed, ctx);

			if (changed.checked) {
				toggle_class(div0, "offset", ctx.checked);
			}

			if (ctx.mobile) {
				if (if_block1) {
					if_block1.p(changed, ctx);
					transition_in(if_block1, 1);
				} else {
					if_block1 = create_if_block(ctx);
					if_block1.c();
					transition_in(if_block1, 1);
					if_block1.m(div1, null);
				}
			} else if (if_block1) {
				group_outros();
				transition_out(if_block1, 1, 1, () => {
					if_block1 = null;
				});
				check_outros();
			}

			if (changed.mobile) {
				toggle_class(div1, "mobile", ctx.mobile);
			}
		},

		i: function intro(local) {
			if (current) return;
			transition_in(if_block0);
			transition_in(if_block1);
			current = true;
		},

		o: function outro(local) {
			transition_out(if_block0);
			transition_out(if_block1);
			current = false;
		},

		d: function destroy(detaching) {
			if (detaching) {
				detach_dev(div1);
			}

			if (if_block0) if_block0.d();
			if (if_block1) if_block1.d();
			div1_resize_listener.cancel();
		}
	};
	dispatch_dev("SvelteRegisterBlock", { block, id: create_fragment.name, type: "component", source: "", ctx });
	return block;
}

function instance($$self, $$props, $$invalidate) {
	

	let { version = '3', gist = null, example = null, embedded = false } = $$props;

	let repl;
	let name = 'loading...';
	let width =  window.innerWidth - 32
		;

	let checked = false;

	onMount(() => {
		if (version !== 'local') {
			fetch(`https://unpkg.com/svelte@${version}/package.json`)
				.then(r => r.json())
				.then(pkg => {
					$$invalidate('version', version = pkg.version);
				});
		}

		if (gist) {
			fetch(`repl/${gist}.json`).then(r => r.json()).then(data => {
				const { description, files } = data;

				$$invalidate('name', name = description);

				const components = Object.keys(files)
					.map(file => {
						const dot = file.lastIndexOf('.');
						if (!~dot) return;

						const source = files[file].content;

						return {
							name: file.slice(0, dot),
							type: file.slice(dot + 1),
							source
						};
					})
					.filter(x => x.type === 'svelte' || x.type === 'js')
					.sort((a, b) => {
						if (a.name === 'App' && a.type === 'svelte') return -1;
						if (b.name === 'App' && b.type === 'svelte') return 1;

						if (a.type !== b.type) return a.type === 'svelte' ? -1 : 1;

						return a.name < b.name ? -1 : 1;
					});

				repl.set({ components });
			});
		} else if (example) {
			fetch(`examples/${example}.json`).then(async response => {
				if (response.ok) {
					const data = await response.json();

					repl.set({
						components: process_example(data.files)
					});
				}
			});
		}
	});

	const rollupUrl = `https://unpkg.com/rollup@1/dist/rollup.browser.js`;

	const writable_props = ['version', 'gist', 'example', 'embedded'];
	Object_1.keys($$props).forEach(key => {
		if (!writable_props.includes(key) && !key.startsWith('$$')) console.warn(`<ReplWidget> was created with unknown prop '${key}'`);
	});

	function repl_1_binding($$value) {
		binding_callbacks[$$value ? 'unshift' : 'push'](() => {
			$$invalidate('repl', repl = $$value);
		});
	}

	function inputoutputtoggle_checked_binding(value) {
		checked = value;
		$$invalidate('checked', checked);
	}

	function div1_resize_handler() {
		width = this.clientWidth;
		$$invalidate('width', width);
	}

	$$self.$set = $$props => {
		if ('version' in $$props) $$invalidate('version', version = $$props.version);
		if ('gist' in $$props) $$invalidate('gist', gist = $$props.gist);
		if ('example' in $$props) $$invalidate('example', example = $$props.example);
		if ('embedded' in $$props) $$invalidate('embedded', embedded = $$props.embedded);
	};

	$$self.$capture_state = () => {
		return { version, gist, example, embedded, repl, name, width, checked, svelteUrl, mobile };
	};

	$$self.$inject_state = $$props => {
		if ('version' in $$props) $$invalidate('version', version = $$props.version);
		if ('gist' in $$props) $$invalidate('gist', gist = $$props.gist);
		if ('example' in $$props) $$invalidate('example', example = $$props.example);
		if ('embedded' in $$props) $$invalidate('embedded', embedded = $$props.embedded);
		if ('repl' in $$props) $$invalidate('repl', repl = $$props.repl);
		if ('name' in $$props) $$invalidate('name', name = $$props.name);
		if ('width' in $$props) $$invalidate('width', width = $$props.width);
		if ('checked' in $$props) $$invalidate('checked', checked = $$props.checked);
		if ('svelteUrl' in $$props) $$invalidate('svelteUrl', svelteUrl = $$props.svelteUrl);
		if ('mobile' in $$props) $$invalidate('mobile', mobile = $$props.mobile);
	};

	let svelteUrl, mobile;

	$$self.$$.update = ($$dirty = { embedded: 1, name: 1, version: 1, width: 1 }) => {
		if ($$dirty.embedded || $$dirty.name) { if (embedded) document.title = `${name} • Svelte REPL`; }
		if ($$dirty.version) { $$invalidate('svelteUrl', svelteUrl =  version === 'local' ?
				`${location.origin}/repl/local` :
				`https://unpkg.com/svelte@${version}`); }
		if ($$dirty.width) { $$invalidate('mobile', mobile = width < 560); }
	};

	return {
		version,
		gist,
		example,
		embedded,
		repl,
		width,
		checked,
		rollupUrl,
		svelteUrl,
		mobile,
		repl_1_binding,
		inputoutputtoggle_checked_binding,
		div1_resize_handler
	};
}

class ReplWidget extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, ["version", "gist", "example", "embedded"]);
		dispatch_dev("SvelteRegisterComponent", { component: this, tagName: "ReplWidget", options, id: create_fragment.name });
	}

	get version() {
		throw new Error("<ReplWidget>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set version(value) {
		throw new Error("<ReplWidget>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get gist() {
		throw new Error("<ReplWidget>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set gist(value) {
		throw new Error("<ReplWidget>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get example() {
		throw new Error("<ReplWidget>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set example(value) {
		throw new Error("<ReplWidget>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get embedded() {
		throw new Error("<ReplWidget>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set embedded(value) {
		throw new Error("<ReplWidget>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

export { ReplWidget as R };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmVwbFdpZGdldC45ZTI3ZmI3My5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvUmVwbC9SZXBsV2lkZ2V0LnN2ZWx0ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8c2NyaXB0PlxyXG5cdGltcG9ydCBSZXBsIGZyb20gJ0BzdmVsdGVqcy9zdmVsdGUtcmVwbCc7XHJcblx0aW1wb3J0IHsgb25Nb3VudCB9IGZyb20gJ3N2ZWx0ZSc7XHJcblxyXG5cdGltcG9ydCB7IHByb2Nlc3NfZXhhbXBsZSB9IGZyb20gJy4uLy4uL3V0aWxzL2V4YW1wbGVzJztcclxuXHRpbXBvcnQgSW5wdXRPdXRwdXRUb2dnbGUgZnJvbSAnLi9JbnB1dE91dHB1dFRvZ2dsZS5zdmVsdGUnO1xyXG5cclxuXHRleHBvcnQgbGV0IHZlcnNpb24gPSAnMyc7XHJcblx0ZXhwb3J0IGxldCBnaXN0ID0gbnVsbDtcclxuXHRleHBvcnQgbGV0IGV4YW1wbGUgPSBudWxsO1xyXG5cdGV4cG9ydCBsZXQgZW1iZWRkZWQgPSBmYWxzZTtcclxuXHJcblx0bGV0IHJlcGw7XHJcblx0bGV0IG5hbWUgPSAnbG9hZGluZy4uLic7XHJcblx0bGV0IHdpZHRoID0gcHJvY2Vzcy5icm93c2VyXHJcblx0XHQ/IHdpbmRvdy5pbm5lcldpZHRoIC0gMzJcclxuXHRcdDogMTAwMDtcclxuXHJcblx0bGV0IGNoZWNrZWQgPSBmYWxzZTtcclxuXHJcblx0b25Nb3VudCgoKSA9PiB7XHJcblx0XHRpZiAodmVyc2lvbiAhPT0gJ2xvY2FsJykge1xyXG5cdFx0XHRmZXRjaChgaHR0cHM6Ly91bnBrZy5jb20vc3ZlbHRlQCR7dmVyc2lvbn0vcGFja2FnZS5qc29uYClcclxuXHRcdFx0XHQudGhlbihyID0+IHIuanNvbigpKVxyXG5cdFx0XHRcdC50aGVuKHBrZyA9PiB7XHJcblx0XHRcdFx0XHR2ZXJzaW9uID0gcGtnLnZlcnNpb247XHJcblx0XHRcdFx0fSk7XHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKGdpc3QpIHtcclxuXHRcdFx0ZmV0Y2goYHJlcGwvJHtnaXN0fS5qc29uYCkudGhlbihyID0+IHIuanNvbigpKS50aGVuKGRhdGEgPT4ge1xyXG5cdFx0XHRcdGNvbnN0IHsgZGVzY3JpcHRpb24sIGZpbGVzIH0gPSBkYXRhO1xyXG5cclxuXHRcdFx0XHRuYW1lID0gZGVzY3JpcHRpb247XHJcblxyXG5cdFx0XHRcdGNvbnN0IGNvbXBvbmVudHMgPSBPYmplY3Qua2V5cyhmaWxlcylcclxuXHRcdFx0XHRcdC5tYXAoZmlsZSA9PiB7XHJcblx0XHRcdFx0XHRcdGNvbnN0IGRvdCA9IGZpbGUubGFzdEluZGV4T2YoJy4nKTtcclxuXHRcdFx0XHRcdFx0aWYgKCF+ZG90KSByZXR1cm47XHJcblxyXG5cdFx0XHRcdFx0XHRjb25zdCBzb3VyY2UgPSBmaWxlc1tmaWxlXS5jb250ZW50O1xyXG5cclxuXHRcdFx0XHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHRcdFx0XHRuYW1lOiBmaWxlLnNsaWNlKDAsIGRvdCksXHJcblx0XHRcdFx0XHRcdFx0dHlwZTogZmlsZS5zbGljZShkb3QgKyAxKSxcclxuXHRcdFx0XHRcdFx0XHRzb3VyY2VcclxuXHRcdFx0XHRcdFx0fTtcclxuXHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHQuZmlsdGVyKHggPT4geC50eXBlID09PSAnc3ZlbHRlJyB8fCB4LnR5cGUgPT09ICdqcycpXHJcblx0XHRcdFx0XHQuc29ydCgoYSwgYikgPT4ge1xyXG5cdFx0XHRcdFx0XHRpZiAoYS5uYW1lID09PSAnQXBwJyAmJiBhLnR5cGUgPT09ICdzdmVsdGUnKSByZXR1cm4gLTE7XHJcblx0XHRcdFx0XHRcdGlmIChiLm5hbWUgPT09ICdBcHAnICYmIGIudHlwZSA9PT0gJ3N2ZWx0ZScpIHJldHVybiAxO1xyXG5cclxuXHRcdFx0XHRcdFx0aWYgKGEudHlwZSAhPT0gYi50eXBlKSByZXR1cm4gYS50eXBlID09PSAnc3ZlbHRlJyA/IC0xIDogMTtcclxuXHJcblx0XHRcdFx0XHRcdHJldHVybiBhLm5hbWUgPCBiLm5hbWUgPyAtMSA6IDE7XHJcblx0XHRcdFx0XHR9KTtcclxuXHJcblx0XHRcdFx0cmVwbC5zZXQoeyBjb21wb25lbnRzIH0pO1xyXG5cdFx0XHR9KTtcclxuXHRcdH0gZWxzZSBpZiAoZXhhbXBsZSkge1xyXG5cdFx0XHRmZXRjaChgZXhhbXBsZXMvJHtleGFtcGxlfS5qc29uYCkudGhlbihhc3luYyByZXNwb25zZSA9PiB7XHJcblx0XHRcdFx0aWYgKHJlc3BvbnNlLm9rKSB7XHJcblx0XHRcdFx0XHRjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG5cclxuXHRcdFx0XHRcdHJlcGwuc2V0KHtcclxuXHRcdFx0XHRcdFx0Y29tcG9uZW50czogcHJvY2Vzc19leGFtcGxlKGRhdGEuZmlsZXMpXHJcblx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pO1xyXG5cdFx0fVxyXG5cdH0pO1xyXG5cclxuXHQkOiBpZiAoZW1iZWRkZWQpIGRvY3VtZW50LnRpdGxlID0gYCR7bmFtZX0g4oCiIFN2ZWx0ZSBSRVBMYDtcclxuXHJcblx0JDogc3ZlbHRlVXJsID0gcHJvY2Vzcy5icm93c2VyICYmIHZlcnNpb24gPT09ICdsb2NhbCcgP1xyXG5cdFx0YCR7bG9jYXRpb24ub3JpZ2lufS9yZXBsL2xvY2FsYCA6XHJcblx0XHRgaHR0cHM6Ly91bnBrZy5jb20vc3ZlbHRlQCR7dmVyc2lvbn1gO1xyXG5cclxuXHRjb25zdCByb2xsdXBVcmwgPSBgaHR0cHM6Ly91bnBrZy5jb20vcm9sbHVwQDEvZGlzdC9yb2xsdXAuYnJvd3Nlci5qc2A7XHJcblxyXG5cdCQ6IG1vYmlsZSA9IHdpZHRoIDwgNTYwO1xyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZT5cclxuXHQucmVwbC1vdXRlciB7XHJcblx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0XHR0b3A6IDA7XHJcblx0XHRsZWZ0OiAwO1xyXG5cdFx0d2lkdGg6IDEwMCU7XHJcblx0XHRoZWlnaHQ6IDEwMCU7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrKTtcclxuXHRcdG92ZXJmbG93OiBoaWRkZW47XHJcblx0XHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG5cdFx0LS1wYW5lLWNvbnRyb2xzLWg6IDQuMnJlbTtcclxuXHR9XHJcblxyXG5cdC52aWV3cG9ydCB7XHJcblx0XHR3aWR0aDogMTAwJTtcclxuXHRcdGhlaWdodDogMTAwJTtcclxuXHR9XHJcblxyXG5cdC5tb2JpbGUgLnZpZXdwb3J0IHtcclxuXHRcdHdpZHRoOiAyMDAlO1xyXG5cdFx0aGVpZ2h0OiBjYWxjKDEwMCUgLSA0MnB4KTtcclxuXHRcdHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzO1xyXG5cdH1cclxuXHJcblx0Lm1vYmlsZSAub2Zmc2V0IHtcclxuXHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDApO1xyXG5cdH1cclxuPC9zdHlsZT5cclxuXHJcbjxkaXYgY2xhc3M9XCJyZXBsLW91dGVyXCIgYmluZDpjbGllbnRXaWR0aD17d2lkdGh9IGNsYXNzOm1vYmlsZT5cclxuXHQ8ZGl2IGNsYXNzPVwidmlld3BvcnRcIiBjbGFzczpvZmZzZXQ9e2NoZWNrZWR9PlxyXG5cdFx0eyNpZiBwcm9jZXNzLmJyb3dzZXJ9XHJcblx0XHRcdDxSZXBsXHJcblx0XHRcdFx0YmluZDp0aGlzPXtyZXBsfVxyXG5cdFx0XHRcdHdvcmtlcnNVcmw9XCJ3b3JrZXJzXCJcclxuXHRcdFx0XHRmaXhlZD17bW9iaWxlfVxyXG5cdFx0XHRcdHtzdmVsdGVVcmx9XHJcblx0XHRcdFx0e3JvbGx1cFVybH1cclxuXHRcdFx0XHRlbWJlZGRlZFxyXG5cdFx0XHRcdHJlbGF4ZWRcclxuXHRcdFx0Lz5cclxuXHRcdHsvaWZ9XHJcblx0PC9kaXY+XHJcblxyXG5cdHsjaWYgbW9iaWxlfVxyXG5cdFx0PElucHV0T3V0cHV0VG9nZ2xlIGJpbmQ6Y2hlY2tlZC8+XHJcblx0ey9pZn1cclxuPC9kaXY+XHJcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O2FBdUhXLE1BQU07aUJBQ1osU0FBUztpQkFDVCxTQUFTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0RBRkgsTUFBTTt5REFDWixTQUFTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1NBU1ksT0FBTzt3Q0FBUCxPQUFPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs0Q0FBUCxPQUFPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7c0JBRDNCLE1BQU07Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O29DQWR5QixPQUFPOzs7O29DQURXLE1BQU07Ozs7Ozs7Ozs7Ozs7Ozs7OztxQ0FDeEIsT0FBTzs7O1dBY3RDLE1BQU07Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7cUNBZjJDLE1BQU07Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0ExR3JELE1BQUksT0FBTyxHQUFHLEdBQUcsRUFDYixJQUFJLEdBQUcsSUFBSSxFQUNYLE9BQU8sR0FBRyxJQUFJLEVBQ2QsUUFBUSxHQUFHLGlCQUFLLENBQUM7O0NBRTVCLElBQUksSUFBSSxDQUFDO0NBQ1QsSUFBSSxJQUFJLEdBQUcsWUFBWSxDQUFDO0NBQ3hCLElBQUksS0FBSyxHQUFHLENBQ1QsTUFBTSxDQUFDLFVBQVUsR0FBRyxFQUFFO0VBQ2xCLENBQUM7O0NBRVIsSUFBSSxPQUFPLEdBQUcsS0FBSyxDQUFDOztDQUVwQixPQUFPLENBQUMsTUFBTTtFQUNiLElBQUksT0FBTyxLQUFLLE9BQU8sRUFBRTtHQUN4QixLQUFLLENBQUMsQ0FBQyx5QkFBeUIsRUFBRSxPQUFPLENBQUMsYUFBYSxDQUFDLENBQUM7S0FDdkQsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7S0FDbkIsSUFBSSxDQUFDLEdBQUcsSUFBSTs2QkFDWixPQUFPLEdBQUcsR0FBRyxDQUFDLFFBQU8sQ0FBQztLQUN0QixDQUFDLENBQUM7R0FDSjs7RUFFRCxJQUFJLElBQUksRUFBRTtHQUNULEtBQUssQ0FBQyxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUk7SUFDM0QsTUFBTSxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsR0FBRyxJQUFJLENBQUM7O3lCQUVwQyxJQUFJLEdBQUcsWUFBVyxDQUFDOztJQUVuQixNQUFNLFVBQVUsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztNQUNuQyxHQUFHLENBQUMsSUFBSSxJQUFJO01BQ1osTUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQztNQUNsQyxJQUFJLENBQUMsQ0FBQyxHQUFHLEVBQUUsT0FBTzs7TUFFbEIsTUFBTSxNQUFNLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLE9BQU8sQ0FBQzs7TUFFbkMsT0FBTztPQUNOLElBQUksRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUM7T0FDeEIsSUFBSSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQztPQUN6QixNQUFNO09BQ04sQ0FBQztNQUNGLENBQUM7TUFDRCxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLEtBQUssUUFBUSxJQUFJLENBQUMsQ0FBQyxJQUFJLEtBQUssSUFBSSxDQUFDO01BQ25ELElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEtBQUs7TUFDZixJQUFJLENBQUMsQ0FBQyxJQUFJLEtBQUssS0FBSyxJQUFJLENBQUMsQ0FBQyxJQUFJLEtBQUssUUFBUSxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUM7TUFDdkQsSUFBSSxDQUFDLENBQUMsSUFBSSxLQUFLLEtBQUssSUFBSSxDQUFDLENBQUMsSUFBSSxLQUFLLFFBQVEsRUFBRSxPQUFPLENBQUMsQ0FBQzs7TUFFdEQsSUFBSSxDQUFDLENBQUMsSUFBSSxLQUFLLENBQUMsQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUMsSUFBSSxLQUFLLFFBQVEsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7O01BRTNELE9BQU8sQ0FBQyxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztNQUNoQyxDQUFDLENBQUM7O0lBRUosSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLFVBQVUsRUFBRSxDQUFDLENBQUM7SUFDekIsQ0FBQyxDQUFDO0dBQ0gsTUFBTSxJQUFJLE9BQU8sRUFBRTtHQUNuQixLQUFLLENBQUMsQ0FBQyxTQUFTLEVBQUUsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sUUFBUSxJQUFJO0lBQ3hELElBQUksUUFBUSxDQUFDLEVBQUUsRUFBRTtLQUNoQixNQUFNLElBQUksR0FBRyxNQUFNLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQzs7S0FFbkMsSUFBSSxDQUFDLEdBQUcsQ0FBQztNQUNSLFVBQVUsRUFBRSxlQUFlLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztNQUN2QyxDQUFDLENBQUM7S0FDSDtJQUNELENBQUMsQ0FBQztHQUNIO0VBQ0QsQ0FBQyxDQUFDOztDQVFILE1BQU0sU0FBUyxHQUFHLENBQUMsaURBQWlELENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MENBTm5FLElBQUksUUFBUSxFQUFFLFFBQVEsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxFQUFFLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQzttREFFdkQsU0FBUyxHQUFHLENBQW1CLE9BQU8sS0FBSyxPQUFPO0lBQ3BELENBQUMsRUFBRSxRQUFRLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQztJQUMvQixDQUFDLHlCQUF5QixFQUFFLE9BQU8sQ0FBQyxFQUFDLENBQUM7OENBSXBDLE1BQU0sR0FBRyxLQUFLLEdBQUcsSUFBRyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==
