import '../css/app.css';
import React from 'react';
import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { createRoot } from 'react-dom/client';

const appName: string = import.meta.env.VITE_APP_NAME || 'Laravel';

createInertiaApp({
	title: (title: string): string => `${title} - ${appName}`,
	resolve: (name: string) => {
		return resolvePageComponent(
			`./Pages/${name}.tsx`,
			import.meta.glob('./Pages/**/*.tsx')
		);
	},
	setup({ el, App, props }: { el: HTMLElement; App: React.ElementType; }) {
		const root = createRoot(el);

		root.render(<App {...props} />);
	},
	progress: {
		color: '#d93347',
	},
});
