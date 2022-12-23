import { Outlet, useLocation } from 'react-router-dom';
import STitle from './Title';
import Sidebar from './Sidebar';
import pageTitle from '../../constants/pageTitle';

function AddsLayout() {
    const locationHook = useLocation();
    const path = locationHook.pathname;
    const title = path.split('/').reverse()[0];
    return (
        <>
            <STitle>{pageTitle[title]}</STitle>
            <Sidebar/>
            <Outlet/>
        </>
    );
}

export default AddsLayout;
