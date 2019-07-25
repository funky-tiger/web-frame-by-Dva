import dynamic from "dva/dynamic";

// export default function getDynamic(app, modelPath, componentPath) {
//     return dynamic({
//         app,
//         models: () => [import(`${modelPath}`)],
//         component: () => import(`${componentPath}}`)
//     });
// }

export default function getDynamic(app, componentPath) {
    return dynamic({
        app,
        component: () => import(`${componentPath}}`)
    });
}
