import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from '@mui/material'
import Image from 'next/image'
// import QRCode from 'qrcode.react'
import React from 'react'

interface QrCodePopupProps {
  open: boolean
  onClose: () => void
  qrCodeImageUrl: string
}

const QrCodePopup: React.FC<QrCodePopupProps> = ({
  open,
  onClose,
  qrCodeImageUrl,
}) => (
  <Dialog open={open} onClose={onClose}>
    <DialogTitle>Scan this QR Code</DialogTitle>
    <DialogContent>
      <Image src={qrCodeImageUrl} alt="QR Code" width={256} height={256} />
    </DialogContent>
    <DialogActions>
      <Button onClick={onClose} color="primary">
        Close
      </Button>
    </DialogActions>
  </Dialog>
)

export default QrCodePopup
