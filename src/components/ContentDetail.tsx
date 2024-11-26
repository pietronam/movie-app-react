import { DialogBody, DialogContent, DialogFooter, DialogHeader, DialogRoot } from "@/components/ui/dialog"
import { CardContentType } from "@/types/contentTypes"
import { Text } from "@chakra-ui/react"

type ContentDetailProps = {
    open: boolean,
    onClose: (isOpen: boolean) => void,
    cardContent: CardContentType | undefined,
}

export const ContentDetail = ({ open, onClose, cardContent }: ContentDetailProps) => {

    if(!cardContent){
        return <Text>No content selected</Text>
    }

    return (
        <DialogRoot
            open={open}
            onOpenChange={(e) => onClose(e.open)}
            size="cover"
        >
            <DialogContent>
                <DialogHeader textStyle="5xl">
                    {cardContent.name}
                </DialogHeader>
                <DialogBody><Text textStyle="2xl">{cardContent.description}</Text></DialogBody>
                <DialogFooter>{cardContent.release_date}</DialogFooter>
            </DialogContent>
        </DialogRoot>
    )
}