import {
    BadgeCheckIcon,
    CollectionIcon,
    HomeIcon,
    LightBulbIcon,
    SearchIcon,
    UserIcon,
} from '@heroicons/react/outline'
import Image from 'next/image';
import HeaderItem from './HeaderItem';

function Header() {
    
    return (
        <header className='flex flex-col sm:flex-row m-5 sm:m-0 justify-between items-center'>
            <div className="flex flex-grow justify-evenly max-w-2xl">
               <HeaderItem title='HOME' Icon={HomeIcon}/>
               <HeaderItem title='TRENDING' Icon={LightBulbIcon}/>
               <HeaderItem title='VERIFIED' Icon={BadgeCheckIcon}/>
               <HeaderItem title='COLLECTIONS' Icon={CollectionIcon}/>
               
               <HeaderItem title='SEARCH' Icon={SearchIcon}/>
               
               <HeaderItem title='ACCOUNT' Icon={UserIcon}/>
            </div>
            <Image
                className='object-container'
                src="https://links.papareact.com/ua6"
                height={80}
                width={80}
                />
        </header>
    );
}

export default Header

