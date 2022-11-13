import App from "../App";
import Aventador from "../Models/Aventador";
import HomePage from "../HomePage/HomePage";
import Huracan from "../Models/Huracan";
import Urus from "../Models/Urus";
import PreOwned from "../Models/PreOwned";
import Concepts from "../Models/Concepts";
import Limited from "../Models/Limited";
import Costomization from "../CustomSolutions/Costomization";
import Accessories from "../CustomSolutions/Accessories";

const routes = [
    {
        id: 1,
        path: '/',
        element: <App />,
        children: [
            {
                id: 2,
                path: 'HomePage',
                element: <HomePage />
                
            },
            {
                id: 3,
                path: 'Huracan',
                element: <Huracan />
            },
            {
                id: 4,
                path: 'Aventador',
                element: <Aventador />
            },
            {
                id: 5,
                path: 'Urus',
                element: <Urus />
            },
            {
                id: 6,
                path: 'Owned',
                element: <PreOwned />
            },
            {
                id: 7,
                path: 'Concepts',
                element: <Concepts />
            },
            {
                id: 8,
                path: 'Limited',
                element: <Limited />
            },
            {
                id: 9,
                path: 'Costomization',
                element: <Costomization />
            },
            {
                id: 10,
                path: 'Accessories',
                element: <Accessories />
            },
        ]
    }
]

export default routes