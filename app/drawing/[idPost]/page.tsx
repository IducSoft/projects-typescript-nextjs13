"use client"

import { Provider } from "react-redux"
import { SinglePostPage } from "../Components/SinglePostPage"
import { persistor, store } from "../store/store"
import { PersistGate } from "redux-persist/integration/react"



export default function page({ params }: { params: { idPost: string } }) {
    console.log(params)
  return (
    <div>
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <SinglePostPage idPost={params.idPost}/>
            </PersistGate>
        </Provider>
        
    </div>)
}

