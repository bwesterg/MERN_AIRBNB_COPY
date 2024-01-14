export default function AddressLink({children,className=null}) {
    if (!className) {
        className = 'my-3 block';
    }
    className+= ' flex gap-1 font-semibold underline'
    return (
        <a className={className} target="_blank" href={'https://maps.google.com?q=' + children} >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607ZM10.5 7.5v6m3-3h-6" />
            </svg>
            {children}
        </a>
    );
}