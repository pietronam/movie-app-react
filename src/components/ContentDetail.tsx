import { DialogBody, DialogContent, DialogFooter, DialogHeader, DialogRoot } from "@/components/ui/dialog"
import { Text } from "@chakra-ui/react"

type ContentDetailProps = {
    open: boolean,
    onClose: (isOpen: boolean) => void,
}

export const ContentDetail = ({ open, onClose }: ContentDetailProps) => {
    return (
        <DialogRoot
            open={open}
            onOpenChange={(e) => onClose(e.open)}
            size="full"
        >
            <DialogContent>
                <DialogHeader>
                    Title
                </DialogHeader>
                <DialogBody><Text textStyle="2xl">hi</Text></DialogBody>
                <DialogFooter>footer</DialogFooter>
            </DialogContent>
        </DialogRoot>
    )
}