
type accountData = {
    userName: string,
    viewData: {}[]
}
type PageFragment = {
  children: React.ReactNode,
    accountData : accountData
}

export default function Page (pageData : PageFragment) {
    return (<>
        <div>
            <h2>Hero area</h2>
            <p>welcome</p>
        </div>
    </>);
}