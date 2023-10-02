function createToast (message, variant='default') {
  const toastContainer = document.querySelector('.toast-viewport');

  const toast = document.createElement('div');
  toast.className = `toast ${variant}`;

  const title = document.createElement('div');
  title.className = 'toast-title';
  title.innerText = 'Title';

  const description = document.createElement('div');
  description.className = 'toast-description';
  description.innerText = message;

  const action = document.createElement('button');
  action.className = `toast-action ${variant}`;
  action.innerText = 'Action';

  const closeBtn = document.createElement('button');
  closeBtn.className = `toast-close ${variant}`;
  closeBtn.innerText = 'X';
  closeBtn.addEventListener('click', () => {
    toastContainer.removeChild(toast);
  });

  toast.appendChild(title);
  toast.appendChild(description);
  toast.appendChild(action);
  toast.appendChild(closeBtn);

  toastContainer.appendChild(toast);

  console.log(toastContainer);
  setTimeout(() => {
    toast.style.transform = 'translateX(0)';
  }, 1000);

  setTimeout(() => {
    toast.style.transform = 'translateX(100%)';
    setTimeout(() => {
      toastContainer.removeChild(toast);
    }, 2000);
  }, 50000);
}

// Usage Example
document.addEventListener('DOMContentLoaded', () => {
  createToast('This is a sample toast message.', 'default');

  createToast('Destructive toast message.', 'destructive');
})
