import '../css/app.css';
import React from 'react';
import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { createRoot } from 'react-dom/client';

const appName: string = import.meta.env.VITE_APP_NAME || 'Laravel';

type SetupProps = {
	el: HTMLElement;
	App: React.ElementType;
	props: Record<string, unknown>;
};

createInertiaApp({
	title: (title: string): string => `${title} - ${appName}`,
	resolve: (name: string) => {
		return resolvePageComponent(
			`./Pages/${name}.tsx`,
			import.meta.glob<() => Promise<{ default: React.ComponentType<any> }>>('./Pages/**/*.tsx')
		);
	},
	setup({ el, App, props }: SetupProps) {
		const root = createRoot(el);
		root.render(<App {...props} />);
	},
	progress: {
		color: '#d93347',
	},
}).then(() => {
	console.log("Inertia app initialized successfully.");
}).catch((error) => {
	console.error("An error occurred while initializing the Inertia app:", error);
});

