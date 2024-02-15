import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-black">
      {/* <Image src='/mainbg.svg' width={1440} height={751} alt="main bg"/> */}
      <div className=" relative bg-[url('/mainbg.svg')] bg-cover  w-full md:h-[751px] h-[203px] flex justify-center items-center flex-col">
        <div className="md:text-[80px] text-[25.6px] bg-gradient-to-b from-[#FFD770] via-[#FFBD7A] to-[#AF4A00] bg-clip-text text-transparent">最适合GameFi的游戏</div>
        <div className="md:text-[120px] text-[38.4px] bg-gradient-to-b from-[#FFD770] via-[#FFBD7A] to-[#AF4A00] bg-clip-text text-transparent">传奇</div>
        <div>
          <div className="bg-[url('/download-text-bg.svg')] bg-center bg-cover md:w-[480px] md:h-[50px] w-[201px] h-[21px]">
          </div>
        </div>
        <div className="md:flex hidden  absolute -bottom-[75px]  justify-center items-center">
          <Image src='/ios.svg' width={206} height={150} alt="ios" className="" />
          <Image src='/android.svg' width={206} height={150} alt="android" />
          <Image src='/windows.svg' width={206} height={150} alt="android" />
        </div>
        <div className="flex md:hidden  absolute -bottom-[31px]  justify-center items-center">
          <Image src='/ios.svg' width={86} height={62} alt="ios" className="" />
          <Image src='/android.svg' width={86} height={62} alt="android" />
          <Image src='/windows.svg' width={86} height={62} alt="android" />
        </div>
      </div>
      <div className="bg-[url('/info-bg.svg')] bg-cover w-full md:h-[837px] h-[226px] flex justify-center items-center">
        <div className="relative bg-[url('/info-text-bg.svg')] mt-20 bg-cover bg-center md:h-[777px] h-[256px] md:w-[1103px] w-[364px] flex justify-center items-center ">
          <p className="flex justify-center items-center w-[745px] md:text-[20px] text-[8px] text-white flex-col md:leading-10 p-12">
            <p>如果您对游戏传奇有所了解，您将意识到它从官方服务器到私人服务器，再到网络游戏和移动游戏的演变，为无数玩家创造了丰厚的财富。除了情感共鸣和知名度外，我们不能忽视其内在的经济系统，其中包括打金玩家、充值玩家、物品流通和自由交易等因素，这些构成了近20年来该IP的持续繁荣。</p>
            <p>这一切难道不正是真正的GameFi吗？虚拟物品价格的炒高、稀缺性的流通、资源的大量消耗，充值玩家在享受游戏体验的同时也能够实现盈利，而专业的打金玩家更能将其发展成为全职事业。</p>
            <p>将这一游戏经济体系与代币相结合，或许可以创造出一个超越寻常的GameFi现象，为玩家提供更多全新的机会和体验。</p>
          </p>
          <div className="bg-gradient-to-b from-[#FFC123] via-[#FFC123] to-[#9B5C2E] bg-clip-text text-transparent absolute md:top-16 top-4 md:text-[56px] text-[18.48px]">游戏介绍</div>
        </div>
      </div>
      <div className="bg-[url('/role-bg.svg')] bg-cover w-full md:h-[858px] h-[232px] flex justify-center items-center">
        <div className="bg-[url('/role-bg2.svg')] bg-cover md:w-[1076px] w-[322px] md:h-[843px] h-[253px] mt-20"></div>
      </div>
      <div className="bg-[url('/home-bg-4.svg')] bg-cover w-full md:h-[735px] h-full  flex justify-center items-center">
        <div className="bg-[url('/home-bg-4-1.svg')] bg-cover md:w-[1105px] md:h-[618px] w-[331px] h-[185px] mt-20">
        </div>
      </div>
      <div className="bg-[url('/home-bg-5.svg')] w-full h-full md:h-[735px] flex justify-around items-center flex-col space-y-6">
        <div className="bg-[url('/home-bg-5-1.svg')] bg-cover md:w-[765px] w-[229px] h-[50px] md:h-[167px] mt-10">
        </div>
        <div className="bg-[url('/home-bg-5-2.svg')] bg-cover md:w-[985px] w-[300px] h-[47px] md:h-[158px]">
        </div>
        <div className="bg-[url('/home-bg-5-3.svg')] bg-cover md:w-[984px] w-[295px] h-[95px] md:h-[316px]">
        </div>
      </div>
      <div className="bg-[url('/home-bg-6.svg')] w-full md:h-[735px] h-[210px] flex justify-center items-center">
        <div className="bg-[url('/home-bg-6-1.svg')] bg-cover md:w-[984px] md:h-[674px] w-[295px] h-[202px] my-20">
        </div>
      </div>
    </main>
  );
}
