import { Dropdown } from "@voidpkg/react-ui";



import { FaLanguage } from 'react-icons/fa';
import { BiLogIn, BiServer, BiHomeAlt, BiCategory } from 'react-icons/bi';
import { HiOutlineAcademicCap } from 'react-icons/hi';
import { RiChat1Line } from 'react-icons/ri';
import { SlGameController } from 'react-icons/sl';
import { MdPublic, MdHowToVote } from 'react-icons/md';
import { AiOutlineTags } from 'react-icons/ai';
import { GoCheck } from 'react-icons/go';
import { AiOutlineUser, AiOutlineCompass } from 'react-icons/ai';

 
export default function App() {



  return(
    <div className="w-full h-max bg-main text-white">
      <div className="h-24 items-center justify-between flex mx-20">
        <div className="font-bold text-lg">rankify<span className="text-purple">.live</span></div>
        <div>
          <ul className="flex">
            <li className="mx-4 hover:bg-label py-2 px-5 rounded-md cursor-pointer flex justify-between items-center"><BiHomeAlt className="mr-1"/>Ana Sayfa</li>
            <li className="mx-4 hover:bg-label py-2 px-5 rounded-md cursor-pointer flex items-center justify-between"><AiOutlineCompass className="mr-1"/>Keşfet</li>
            <Dropdown className="w-48 relative flex cursor-pointer">
        <Dropdown.Button className="mx-4 hover:bg-label py-2 px-5 rounded-md flex items-center justify-between">
            {({ isOpen }) => (
                <>
                    <BiCategory className="mr-1"/>
                    <span className="">{"Kategoriler"}</span>
                    <svg className={`w-7 h-7 ml-4 transform transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} viewBox="0 0 20 20" fill="currentColor">
                        <path d="M7.293 7.707a1 1 0 011.414 0L10 9.586l1.293-1.293a1 1 0 111.414 1.414l-2 2a1 1 0 01-1.414 0l-2-2a1 1 0 010-1.414z"></path>
                    </svg>
                </>
            )}
        </Dropdown.Button>
        <Dropdown.Menu className="flex flex-col overflow-hidden absolute p-2 right-0 mt-2 border border-label top-12 w-full origin-top-right rounded-xl bg-label/95 shadow-lg ring-1 ring-label ring-opacity-5 focus:outline-none space-y-2 transform opacity-100 scale-100">
                <Dropdown.Item className="w-full px-4 py-2 rounded-xl mt-1 hover:text-white transition-all duration-200 cursor-pointer flex items-center justify-between"><div className='flex items-center'><HiOutlineAcademicCap className="mr-2"/>Education </div><div className="w-8 h-8 bg-main/80 rounded justify-center flex items-center">0</div></Dropdown.Item>
                <Dropdown.Item className="w-full px-4 py-2 rounded-xl mt-1 hover:text-white transition-all duration-200 cursor-pointer flex items-center justify-between"><div className='flex items-center'><RiChat1Line className="mr-2"/>Community </div><div className="w-8 h-8 bg-main/80 rounded justify-center flex items-center">3</div></Dropdown.Item>
                <Dropdown.Item className="w-full px-4 py-2 rounded-xl mt-1 hover:text-white transition-all duration-200 cursor-pointer flex items-center justify-between"><div className='flex items-center'><SlGameController className="mr-2"/>Gaming </div><div className="w-8 h-8 bg-main/80 rounded justify-center flex items-center">10</div></Dropdown.Item>
                <Dropdown.Item className="w-full px-4 py-2 rounded-xl mt-1 hover:text-white transition-all duration-200 cursor-pointer flex items-center justify-between"><div className='flex items-center'><MdPublic className="mr-2"/>Public </div><div className="w-8 h-8 bg-main/80 rounded justify-center flex items-center">5</div></Dropdown.Item>
                <Dropdown.Item className="w-full px-4 py-2 rounded-xl mt-1 hover:text-white transition-all duration-200 cursor-pointer flex items-center justify-between"><div className='flex items-center'><AiOutlineTags className="mr-2"/>Other </div><div className="w-8 h-8 bg-main/80 rounded justify-center flex items-center">7</div></Dropdown.Item>
        </Dropdown.Menu>
</Dropdown>
          </ul>
        </div>
        <div className="flex items-center">
          <div className="cursor-pointer mx-3 w-11 h-11 bg-label rounded-xl justify-center flex items-center"><FaLanguage className='w-5 h-5 text-white/90'/></div>
          <div className="cursor-pointer w-11 h-11 bg-label rounded-xl justify-center flex items-center"><BiLogIn className='w-5 h-5 text-white/90'/></div>
        </div>
      </div>

      <div className="mx-20 pt-32 flex">
        <div>
          <div className="font-bold text-5xl text-purple">Rankify</div>
          <div className="w-[850px] pt-4 text-white/70">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis porta erat vitae ligula bibendum, eget tincidunt risus sagittis. Donec condimentum varius metus, in imperdiet lacus dignissim vitae. Sed nunc neque, faucibus quis quam vitae, laoreet dignissim ipsum. Vivamus sollicitudin velit ut ipsum semper, sit amet lacinia nunc efficitur. Sed eget libero eget arcu volutpat convallis.</div>
          <input class="appearance-none w-96 text-description bg-label border border-label rounded mt-4 py-2.5 px-4 leading-tight focus:outline-none text-white/70" type="text" placeholder="Sunucularda ara..." />
        </div>
        <div className="mx-40 -mt-8">
          <div className="w-72 h-72 bg-label rounded-2xl"></div>
          <div className="w-60 h-12 bg-label rounded-2xl mt-4 ml-6"></div>
        </div>
      </div>

      <div className="flex items-center justify-between mx-20 mt-28">
        <div className="w-[660px] h-[445px] bg-[url('https://desion.app/tr/1a23068e966efce6fb32ca9fecc65eed.svg')] bg-no-repeat bg-cover rounded-3xl">
          <div className="w-full h-full bg-black/60 rounded-3xl">
            <div className="font-bold text-6xl font-montserrat mx-20 w-[450px] pt-12">Senin için en iyi sunucuları keşfet</div>
            <div className="text-sm text-white/70 mx-20 pt-4">Size en uygun sunucuları bulun, yeni sunucuları keşfedin ve beğendiğiniz sunuculara oy verin.</div>
          </div>
        </div>
        <div className="w-[660px] h-[445px] bg-[url('https://cdna.artstation.com/p/assets/images/images/035/311/830/large/sierra-a-3-fullsize.jpg?1614647487')] bg-no-repeat bg-cover rounded-3xl">
          <div className="w-full h-full bg-black/60 rounded-3xl">
            <div className="font-bold text-6xl font-montserrat mx-20 w-[450px] pt-12">Yönetimi çok kolay, hızlı ve modern</div>
            <div className="text-sm text-white/70 mx-20 pt-4">Rakiplerimiz arasında en iyisi olduğumuzu iddia ediyoruz, Desion hıza ve modernliğe en çok önem veriyor.</div>
          </div>
        </div>
      </div>

      <div className="w-[1360px] h-16 bg-label mx-20 mt-20 mb-8 rounded-3xl">
        <div className="pt-2 mx-20">
        <ul className="justify-between items-center flex">
            <li className="px-8 py-3 hover:bg-main/50 rounded cursor-pointer flex items-center"><BiServer className="mr-2"/>Tüm Sunucular</li>
            <li className="px-8 py-3 hover:bg-main/50 rounded cursor-pointer flex items-center"><GoCheck className="mr-2"/>Onaylı Sunucular</li>
            <li className="px-8 py-3 hover:bg-main/50 rounded cursor-pointer flex items-center"><MdPublic className="mr-2"/>Public Sunucular</li>
            <li className="px-8 py-3 hover:bg-main/50 rounded cursor-pointer flex items-center"><SlGameController className="mr-2"/>Oyun Sunucuları</li>
            <li className="px-8 py-3 hover:bg-main/50 rounded cursor-pointer flex items-center"><HiOutlineAcademicCap className="mr-2"/>Eğitim Sunucuları</li>
          </ul>
        </div>
      </div>

      <div className="grid gap-6 grid-cols-1 mx-44">
        <div className="w-[1000px] h-28 bg-label mx-20 rounded-xl flex items-center justify-between">
          <div className="flex justify-center">
            <div className="mx-4 w-20 h-20 bg-main rounded-2xl"></div>
            <div className="">
              <div className="font-semibold text-lg">The Camping</div>
              <div className="text-sm text-white/75">Her yaştan her kitleye hitap eden, her kişiye destek veren, güzel, düzenli, saygılı bir topluluk, Katıl ve Eğlen!</div>
              <div className="mt-2 w-20 h-7 rounded bg-main/70 flex justify-center items-center"><MdPublic className="mr-1"/>Public</div>
            </div>
          </div>
          <div className="mx-4">
            <div className="my-2 w-20 h-9 bg-main/70 rounded-lg flex items-center justify-center">100<AiOutlineUser className="ml-1"/></div>
            <div className="my-2 w-20 h-9 bg-main/70 rounded-lg flex items-center justify-center">20<MdHowToVote className="ml-1"/></div>
          </div>
        </div>
        
        <div className="w-[1000px] h-28 bg-label mx-20 rounded-xl flex items-center justify-between hover:bg-hover">
          <div className="flex justify-center">
            <div className="mx-4 w-20 h-20 bg-[url('https://cdn.discordapp.com/icons/1011780374281605261/a_9139a152a55ecffa45da79694d6de4d9.gif?size=80')] rounded-2xl"></div>
            <div className="pt-3">
              <div className="font-semibold text-lg">The Camping</div>
              <div className="text-sm text-white/75">Her yaştan her kitleye hitap eden, her kişiye destek veren, güzel, düzenli, saygılı bir topluluk, Katıl ve Eğlen!</div>
            </div>
          </div>
          <div className="mx-4">
            <div className="my-2 w-20 h-9 bg-main/70 rounded-lg flex items-center justify-center">100<AiOutlineUser className="ml-1"/></div>
            <div className="my-2 w-20 h-9 bg-main/70 rounded-lg flex items-center justify-center">20<MdHowToVote className="ml-1"/></div>
          </div>
        </div>

        <div className="w-[1000px] h-28 bg-label mx-20 rounded-xl flex items-center justify-between">
          <div className="flex justify-center">
            <div className="mx-4 w-20 h-20 bg-main rounded-2xl"></div>
            <div className="pt-3">
              <div className="font-semibold text-lg">The Camping</div>
              <div className="text-sm text-white/75">Her yaştan her kitleye hitap eden, her kişiye destek veren, güzel, düzenli, saygılı bir topluluk, Katıl ve Eğlen!</div>
            </div>
          </div>
          <div className="mx-4">
            <div className="my-2 w-20 h-9 bg-main/70 rounded-lg flex items-center justify-center">100<AiOutlineUser className="ml-1"/></div>
            <div className="my-2 w-20 h-9 bg-main/70 rounded-lg flex items-center justify-center">20<MdHowToVote className="ml-1"/></div>
          </div>
        </div>
      </div>
    </div>
  )
}