export default function ensureWindowIsOnADisplay(mainWindow) {
  const winBounds = mainWindow.getBounds();
  const isOnADisplay = screen.getAllDisplays()
    .map(display => winBounds.x >= display.bounds.x
      && winBounds.x <= display.bounds.x + display.bounds.width
      && winBounds.y >= display.bounds.y
      && winBounds.y <= display.bounds.y + display.bounds.height)
    .some(display => display);

  if (!isOnADisplay) {
    mainWindow.center();
  }
}