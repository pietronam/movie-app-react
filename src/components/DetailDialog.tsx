import { getMovieDetail, getTvDetail, getPersonDetail } from "@/api/contentDetail"
import { DialogBody, DialogContent, DialogFooter, DialogRoot } from "@/components/ui/dialog"
import { ContentDisplayType } from "@/types/contentDisplayTypes"
import { CardContentType } from "@/types/contentTypes"
import { Box, Text, Image } from "@chakra-ui/react"
import { useEffect, useState } from "react"

type DetailDialogProps = {
    open: boolean,
    onClose: (isOpen: boolean) => void,
    cardContent: CardContentType | undefined,
}

export const DetailDialog = ({ open, onClose, cardContent }: DetailDialogProps) => {
    const [contentDetail, setContentDetail] = useState<ContentDisplayType | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    const IMAGE_BASE_URL = import.meta.env.VITE_IMAGE_BASE_URL;


    useEffect(() => {
        const loadContentDetail = async () => {
            if (!cardContent) return;
            setLoading(true);
            setError(null);

            try {
                let detail: ContentDisplayType;
                switch (cardContent.media_type) {
                    case "movie":
                        detail = await getMovieDetail(cardContent.id);
                        break;
                    case "tv":
                        detail = await getTvDetail(cardContent.id);
                        break;
                    case "person":
                        detail = await getPersonDetail(cardContent.id);
                        break;
                }
                setContentDetail(detail);
            } catch (error) {
                console.error(error);
                setError("Failed to load content details.");
            } finally {
                setLoading(false);
            }
        }
        loadContentDetail();
    }, [cardContent])


    try {
        return (
            <DialogRoot
                open={open}
                onOpenChange={(e) => onClose(e.open)}
                size="cover"
            >
                <DialogContent maxHeight={"100%"}>
                    {loading ? (
                        <Text>Loading...</Text>
                    ) : error ? (
                        <Text>{error}</Text>
                    ) : contentDetail ? (
                        <>
                            <DialogBody display="flex" maxHeight={"100%"}>
                                <Box w="2/3">
                                    <Text textStyle="5xl">{contentDetail.name}</Text>
                                    <Text textStyle="md">{contentDetail.description}</Text>
                                </Box>
                                <Box w="1/3">
                                    <Image src={`${IMAGE_BASE_URL}/w500/${contentDetail.img}`} maxHeight={"100%"}/>
                                </Box>
                            </DialogBody>
                        </>
                    ) : (
                        <Text>No content available</Text>
                    )}
                    <DialogFooter></DialogFooter>
                </DialogContent>
            </DialogRoot>
        )
    } catch (error) {
        console.error(error)
        return <Text>Error displaying content details. Please try again later.</Text>
    }
}