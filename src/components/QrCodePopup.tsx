import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
} from '@mui/material'
import Image from 'next/image'
// import QRCode from 'qrcode.react'
import React from 'react'

interface QrCodePopupProps {
  open: boolean
  onClose: () => void
  qrCodeImageUrl?: string
  message?: string
}

const QrCodePopup: React.FC<QrCodePopupProps> = ({
  open,
  onClose,
  qrCodeImageUrl,
  message,
}) => (
  <Dialog open={open} onClose={onClose}>
    <DialogTitle>{message ? 'Success' : 'Scan this QR Code'}</DialogTitle>
    <DialogContent>
      {message ? (
        <Typography>{message}</Typography>
      ) : (
        qrCodeImageUrl && (
          <Image src={qrCodeImageUrl} alt="QR Code" width={256} height={256} />
        )
      )}
    </DialogContent>
    <DialogActions>
      <Button onClick={onClose} color="primary">
        Close
      </Button>
    </DialogActions>
  </Dialog>
)

export default QrCodePopup
