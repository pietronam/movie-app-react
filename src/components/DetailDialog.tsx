import { DialogBody, DialogContent, DialogRoot } from "@/components/ui/dialog"
import { useContentDetail } from "@/hooks/useContentDetail"
import { CardContentType } from "@/types/contentTypes"
import { Box, Image, Text } from "@chakra-ui/react"

type DetailDialogProps = {
    open: boolean,
    onClose: (isOpen: boolean) => void,
    cardContent: CardContentType | undefined,
}

export const DetailDialog = ({ open, onClose, cardContent }: DetailDialogProps) => {
    const IMAGE_BASE_URL = import.meta.env.VITE_IMAGE_BASE_URL;

    if (!cardContent) return;
    const { contentDetail, loading, error } = useContentDetail(cardContent);

    return (
        <DialogRoot
            open={open}
            onOpenChange={(e) => onClose(e.open)}
            size="cover"
        >
            <DialogContent maxHeight={"100%"}>
                {loading ? (<Text>Loading...</Text>)
                    : error ? (<Text>{error}</Text>)
                        : contentDetail ? (
                            <>
                                <DialogBody display="flex" maxHeight={"100%"}>
                                    <Box w="2/3">
                                        <Text textStyle="5xl">{contentDetail.name}</Text>
                                        <Text textStyle="md">{contentDetail.description}</Text>
                                    </Box>
                                    <Box w="1/3">
                                        <Image src={`${IMAGE_BASE_URL}/w500/${contentDetail.img}`} maxHeight={"100%"} />
                                    </Box>
                                </DialogBody>
                            </>
                        ) : (
                            <Text>No content available</Text>
                        )}
            </DialogContent>
        </DialogRoot>
    )
}