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
            <h2>Welcome</h2>
            <p>Please log in</p>
            <button><a href="/dacruz/account"><h3>Login</h3></a></button>
        </div>
    </>);
}