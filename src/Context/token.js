import { createContext, useState } from 'react';

export let TokenContext = createContext();

function TokenContextProvider({ children }) {
	const [token, setToken] = useState(null);
	return (
		<TokenContext.Provider value={{ token, setToken }}>
			{children}
		</TokenContext.Provider>
	);
}

export default TokenContextProvider;
