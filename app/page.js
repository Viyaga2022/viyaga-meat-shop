import Header from '@/components/Header'
import SideBar from '@/components/home/SideBar'
import Categories from '@/components/home/Categories'
import Offers from '@/components/home/Offers'
import Deals from '@/components/home/Deals'
import OnTrend from '@/components/home/OnTrend'
import BottomTab from '@/components/BottomTab'
import ThemeColor from '@/components/home/ThemeColor'

export default function Home() {
    return (
        <>
            <Header />
            <SideBar />
            <div className="page-content">
                <div className="container bottom-content">
                    <Categories />
                    <Offers />
                    <Deals />
                    <OnTrend />
                </div>
            </div>
            <BottomTab home="active" />
            <ThemeColor />
        </>
    )
}
