import { createApp } from 'vue';
import '@fancyapps/fancybox/dist/jquery.fancybox.css';

const app = createApp();

// Import Fancybox
import fancybox from '@fancyapps/fancybox';

// Use Fancybox
app.use(fancybox);

app.mount();
