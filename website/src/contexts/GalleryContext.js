import { createContext, useContext } from "react";

export const GalleryContext = createContext({
    imgList: []
})
export const GalleryProvider = GalleryContext.Provider
export default function useImgList() {
    return useContext(GalleryContext)
}