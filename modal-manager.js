/**
 * MODAL MANAGER - Sistema de gestión de modales para Black Horse
 * Este archivo maneja la apertura, cierre y comportamiento de los modales
 */

export class ModalManager {
    constructor(productRenderer) {
        this.productRenderer = productRenderer;
        this.modalOpen = false;
        this.currentModal = null;
    }
    
    /**
     * Inicializa los listeners de modales
     */
    init() {
        // Delegación de eventos para botones de ver detalle
        document.addEventListener('click', (e) => {
            // Botón "Ver Detalle"
            if (e.target.closest('.view-detail-btn')) {
                const productId = parseInt(e.target.closest('.view-detail-btn').dataset.productId);
                this.openProductModal(productId);
            }
            
            // Botón de cerrar modal
            if (e.target.closest('.close-modal') || e.target.classList.contains('close-modal')) {
                this.closeModal();
            }
            
            // Cerrar modal al hacer clic fuera (en el backdrop)
            if (e.target.classList.contains('modal-backdrop')) {
                this.closeModal();
            }
            
            // Botón de solicitar cotización dentro del modal
            if (e.target.closest('.request-quote-btn')) {
                this.handleQuoteRequest();
            }
        });
        
        // Cerrar modal con Escape
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.modalOpen) {
                this.closeModal();
            }
        });
    }
    
    /**
     * Abre modal de producto
     * @param {number} productId - ID del producto
     */
    openProductModal(productId) {
        // Buscar producto en la base de datos (ahora importada)
        const product = window.PRODUCTS_DB.find(p => p.id === productId);
        if (!product) {
            console.error('Producto no encontrado:', productId);
            return;
        }
        
        // Crear y mostrar modal
        const modalHTML = this.productRenderer.templates.productModal(product);
        const modalElement = this.createModalFromHTML(modalHTML);
        
        document.body.appendChild(modalElement);
        document.body.style.overflow = 'hidden';
        this.modalOpen = true;
        this.currentModal = modalElement;
        
        // Añadir animación de entrada
        setTimeout(() => {
            const backdrop = modalElement.querySelector('.modal-backdrop');
            const modalContent = modalElement.querySelector('.modal-content');
            if (backdrop) backdrop.style.opacity = '1';
            if (modalContent) modalContent.style.transform = 'translateY(0)';
        }, 10);
    }
    
    /**
     * Cierra el modal actual
     */
    closeModal() {
        if (!this.currentModal || !this.modalOpen) return;
        
        // Animación de salida
        const backdrop = this.currentModal.querySelector('.modal-backdrop');
        const modalContent = this.currentModal.querySelector('.modal-content');
        
        if (backdrop) backdrop.style.opacity = '0';
        if (modalContent) modalContent.style.transform = 'translateY(-20px)';
        
        setTimeout(() => {
            this.currentModal.remove();
            document.body.style.overflow = '';
            this.modalOpen = false;
            this.currentModal = null;
        }, 300);
    }
    
    /**
     * Maneja la solicitud de cotización
     */
    handleQuoteRequest() {
        // Cerrar modal
        this.closeModal();
        
        // Redirigir al formulario de contacto
        const currentPage = window.location.pathname;
        
        if (currentPage.includes('catalogo.html')) {
            // Si estamos en catálogo, ir a index.html#contacto
            window.location.href = 'index.html#contacto';
        } else {
            // Si estamos en index, hacer scroll a contacto
            const contactSection = document.getElementById('contacto');
            if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
                // Enfocar el primer campo del formulario
                setTimeout(() => {
                    const nameInput = document.getElementById('name');
                    if (nameInput) nameInput.focus();
                }, 500);
            }
        }
    }
    
    /**
     * Crea elemento modal desde HTML string
     */
    createModalFromHTML(htmlString) {
        const template = document.createElement('template');
        template.innerHTML = htmlString.trim();
        return template.content.firstElementChild;
    }
}