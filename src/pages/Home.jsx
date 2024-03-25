import Hero from "../compnents/Hero";

const Home = () => {
    return (
        <div className="relative flex flex-col items-center justify-center min-h-[calc(100vh-116px)]">    
           <Hero></Hero>    
           <img className="absolute bottom-0 w-full" src="wave.svg" alt="" />      
        </div>
    );
};

export default Home;