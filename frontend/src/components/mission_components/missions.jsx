import '../Mission/mission.css';
import BigBox from './primary_box/big_box';
import SmallBox from './small_box/small_box'
import LargeBox from './large_box/large_box'
const Missions = () => {
    return (
        <div className='boxes-container'>
            <div className='left-container'>
                <BigBox/>
            </div>
            <div className='right-container'>
                <div className='double-container'>
                    <SmallBox small_bio={'Fast and compact code editor on the web'} title={'Code whereever you are in the world, just start!'}/>
                    <SmallBox small_bio={'Our mission is to let those without resources start their journey'} title={'You just need a laptop and connection to wifi!'}/>
                </div>
                <div className='large-container'>
                    <LargeBox small_bio={'You can join and start learning to secure that dream job you want'} title={'Keep learning and you will get that job'}/>
                </div>
            </div>
        </div>
    );
}
export default Missions;