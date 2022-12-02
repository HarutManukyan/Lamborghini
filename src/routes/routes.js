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
import FinServices from "../CustomSolutions/FinServices";
import WarrExt from "../CustomSolutions/WarrExt";
import Connectivity from "../Ownership/Connectyvity";
import CostApp from "../Ownership/CostApp";
import Mobprog from "../Ownership/Mobprogs";
import Classics from "../Ownership/Classics";
import Services from "../Ownership/Services";
import Museum from "../RightNav/Museum";
import Store from "../RightNav/Store";
import Design from "../NavBurger/Design";
import Driving from "../NavBurger/Driving";
import Innovation from "../NavBurger/Innovation";
import Lounge from "../NavBurger/Lounge";
import News from "../NavBurger/News";
import SingleNew from "../NavBurger/SingleNew";
import SingleModel from "../HomePage/SingleModel";
import LimitedModel from "../Models/LimitedModel";
import Terzo from "../Models/Terzo";
import Asterion from "../Models/Asterion";
import Estoque from "../Models/Estoque";
import Australia from "../CustomSolutions/Countries/Australia";
import SingleAccessori from "../CustomSolutions/SingleAccessori";
import Japan from "../CustomSolutions/Countries/Japan";
import Singapore from "../CustomSolutions/Countries/Singapore";
import Usa from "../CustomSolutions/Countries/Usa";
import Canada from "../CustomSolutions/Countries/Canada";
import Italy from "../CustomSolutions/Countries/Italy";
import Russia from "../CustomSolutions/Countries/Russia";
import SaudiArabia from "../CustomSolutions/Countries/SauidiArabia";
import Uk from "../CustomSolutions/Countries/Uk";
import Germany from "../CustomSolutions/Countries/Germany";

const routes = [
    {
        path: '/',
        element: <App />,
        children: [
            {
    
                path: 'HomePage',
                element: <HomePage />
                
            },
            {
    
                path: 'Huracan',
                element: <Huracan />
            },
            {
    
                path: 'Aventador',
                element: <Aventador />
            },
            {
    
                path: 'Urus',
                element: <Urus />
            },
            {
    
                path: 'Owned',
                element: <PreOwned />
            },
            {
    
                path: 'Concepts',
                element: <Concepts />
            },
            {
    
                path: 'Limited',
                element: <Limited />
            },
            {
    
                path: 'Costomization',
                element: <Costomization />
            },
            {
    
                path: 'Accessories',
                element: <Accessories />
            },
            {
    
                path: 'Fin',
                element: <FinServices />
            },
            {
    
                path: 'Ext',
                element: <WarrExt />
            },
            {
                path: 'Connect',
                element: <Connectivity />
            },
            {
                path: 'Custapp',
                element: <CostApp />
            },
            {
                path: 'Mobprog',
                element: <Mobprog />
            },
            {
                path: 'Classics',
                element: <Classics />
            },
            {
                path: 'Service',
                element: <Services />
            },
            {
                path: 'Museum',
                element: <Museum />
            },
            {
                path: 'Store',
                element: <Store />
            },
            {
                path: 'Design',
                element: <Design />
            },
            {
                path: 'driving',
                element: <Driving />
            },
            {
                path: 'innovation',
                element: <Innovation />
            },
            {
                path: 'lounge',
                element: <Lounge />
            },
            {
                path: 'news',
                element: <News />
            },
            {
                path: 'SingleNew',
                element: <SingleNew />
            },
            {
                path: 'Estoque',
                element: <Estoque />
            },
            {
                path: 'SingleModel',
                element: <SingleModel />
            },
            {
                path: 'LimitedModel',
                element: <LimitedModel />
            },
            {
                path: 'Terzo',
                element: <Terzo />
            },
            {
                path: 'Asterion',
                element: <Asterion />
            },
            {
                path: 'Australia',
                element: <Australia />
            },
            {
                path: 'Japan',
                element: <Japan />
            },
            {
                path: 'Singapore',
                element: <Singapore />
            },
            {
                path: 'Usa',
                element: <Usa />
            },
            {
                path: 'Canada',
                element: <Canada />
            },
            {
                path: 'Italy',
                element: <Italy />
            },
            {
                path: 'Russia',
                element: <Russia />
            },
            {
                path: 'SaudiArabia',
                element: <SaudiArabia />
            },
            {
                path: 'Uk',
                element: <Uk />
            },
            {
                path: 'Germany',
                element: <Germany />
            },
            {
                path: 'SingleAccessori',
                element: <SingleAccessori />
            },
        ]
    }
]

export default routes