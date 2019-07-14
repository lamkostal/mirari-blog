function showError(errId, errMsg) {
    alert('An error occured: ' + errId + ', ' + errMsg);
}

function patchInitialized() {
    // You can now access the patch object (CABLES.patch), register variable watchers and so on
}

function patchFinishedLoading() {
    // The patch is ready now, all assets have been loaded
}

 document.addEventListener('DOMContentLoaded', function(event) {
    // CABLES.patch = new CABLES.Patch({
    //     patchFile: 'js/clusterdeckOpt.json',
    //     prefixAssetPath: '',
    //     glCanvasId: 'glcanvas',
    //     glCanvasResizeToWindow: true,
    //     glCanvasResizeToParent:true,
    //     onError: showError,
    //     onPatchLoaded: patchInitialized,
    //     onFinishedLoading: patchFinishedLoading,
    // });
    // console.log('trexei');
});