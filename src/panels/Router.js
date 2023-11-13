import { RouterProvider, createHashRouter } from '@vkontakte/vk-mini-apps-router';


const routes = createHashRouter([
    {
        path: '/',
        panel: 'home',
        view: 'default_view',
        root: 'default_root',
      },
      {
        path: '/Allbudy',
        panel: 'Allbudy',
        view: 'default_view',
        root: 'default_root',
      }
]);


<RouterProvider router={router}>
    <App />
</RouterProvider>

const router =createHashRouter(routes);

