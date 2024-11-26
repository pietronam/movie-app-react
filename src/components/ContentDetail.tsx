import { DialogBody, DialogContent, DialogFooter, DialogHeader, DialogRoot } from "@/components/ui/dialog"
import { MovieType } from "@/types/contentTypes"
import { Text } from "@chakra-ui/react"

type ContentDetailProps = {
    open: boolean,
    onClose: (isOpen: boolean) => void,
    content: MovieType | undefined,
}

export const ContentDetail = ({ open, onClose, content }: ContentDetailProps) => {
    
    if(!content){
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
                    {content.title}
                </DialogHeader>
                <DialogBody><Text textStyle="2xl">{content.overview}</Text></DialogBody>
                <DialogFooter>{content.release_date}</DialogFooter>
            </DialogContent>
        </DialogRoot>
    )
}