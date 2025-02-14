
export const Header = () => {
    return (
        <div className={'bg-secondary'}>
         <div className={'container mx-auto py-4'}>
             <header className={'flex justify-between items-center'}>
                 <span className={'font-bold'}>LOGO</span>
                 <nav>
                     <ul className={'flex items-center gap-4'}>
                         <li>Dashboard</li>
                         <li>Monthly</li>
                     </ul>
                 </nav>
             </header>
         </div>
        </div>
    );
};