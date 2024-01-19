export async function useCopyToast(text: string) {
  const toast = useToast()
  await navigator.clipboard.writeText(text)
  toast.add({
    title: 'Copied to clipboard',
    timeout: 1000,
    icon: 'i-heroicons-clipboard-document-check',
    color: 'green',
  })
}
