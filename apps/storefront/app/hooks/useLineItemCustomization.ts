export function useLineItemCustomization(item: any) {
  const customization = item?.metadata?.custom_message 
    ? { custom_message: item.metadata.custom_message }
    : null;

  return { customization, loading: false };
}
