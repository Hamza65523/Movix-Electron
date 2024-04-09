export type VideoPopupProps ={
    show: boolean;
    setShow: React.Dispatch<React.SetStateAction<boolean>>;
    videoId: string | null;
    setVideoId: React.Dispatch<React.SetStateAction<string | null>>;
}