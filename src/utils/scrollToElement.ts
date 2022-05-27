export function scrollToElement(id: string) {
  const element = document.getElementById(id);

  if (element !== null)
    element.scrollIntoView({ block: 'center', behavior: 'smooth' });
}
